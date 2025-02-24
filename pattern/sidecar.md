### 사이드카 패턴(Sidecar Pattern) - TypeScript 예제

#### 🚀 개념 정리
사이드카 패턴은 **주 애플리케이션과 별도의 보조 프로세스를 붙여 동작**하도록 설계하는 방식이다. 주로 **컨테이너 환경(Kubernetes)** 에서 많이 쓰이며, **보조 컨테이너가 로깅, 모니터링, 보안 등의 역할을 수행**한다.

#### 🏗 구조
1. **메인 애플리케이션**: 핵심 기능을 담당
2. **사이드카 프로세스**: 추가 기능(예: 로깅, 캐싱, 인증) 수행

---

### 🛠 TypeScript로 사이드카 패턴 구현

#### 🎯 예제: HTTP 요청 로깅 사이드카

1. **메인 애플리케이션 (Express 서버)**
2. **사이드카 (별도 프로세스에서 로그 저장)**

📌 **파일 1: `server.ts` (메인 애플리케이션)**

```ts
import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

// 사이드카에 로그 전송
const sendToSidecar = async (log: object) => {
  await axios.post("http://localhost:5001/logs", log).catch(console.error);
};

app.post("/data", async (req, res) => {
  const { message } = req.body;
  
  // 로그를 사이드카에 전달
  sendToSidecar({ event: "data_received", message });

  res.json({ status: "ok", received: message });
});

app.listen(5000, () => console.log("Main server running on port 5000"));
```

📌 **파일 2: `sidecar.ts` (로그 저장 사이드카 서비스)**

```ts
import express from "express";

const app = express();
app.use(express.json());

const logs: object[] = [];

app.post("/logs", (req, res) => {
  logs.push(req.body);
  console.log("📜 로그 저장:", req.body);
  res.json({ status: "logged" });
});

app.get("/logs", (req, res) => {
  res.json(logs);
});

app.listen(5001, () => console.log("Sidecar running on port 5001"));
```

---

### 🔥 실행 방법
1. `ts-node server.ts` 실행 → 메인 애플리케이션 가동 (5000번 포트)
2. `ts-node sidecar.ts` 실행 → 사이드카 서비스 가동 (5001번 포트)
3. `POST http://localhost:5000/data` 요청 → 사이드카에서 로그 저장 확인

---

### 💡 핵심 요약
- **사이드카 패턴**: 애플리케이션과 별도로 보조 프로세스를 실행하는 아키텍처 패턴
- **TypeScript 예제**: Express 서버와 사이드카 프로세스로 HTTP 로그 관리
- **장점**:
  - 애플리케이션 로직과 보조 기능 분리 (유지보수 쉬움)
  - 마이크로서비스 환경에서 확장 가능
  - 보안, 로깅, 인증, 캐싱 등의 모듈화 가능

🚀 **즉, 메인은 핵심 기능만, 사이드카는 보조 역할을 맡기는 구조!**