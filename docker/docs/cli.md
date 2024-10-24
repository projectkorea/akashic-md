# Docker cli

### 1. **`docker run`**

- **설명**: 새로운 컨테이너를 생성하고 s실행
- **주요 옵션**:
    - `d`: 백그라운드에서 실행.
    - `p`: 호스트와 컨테이너 간의 **포트 매핑(Port Mapping)**
        - **호스트 머신의 포트**와 **컨테이너 또는 서버의 포트**를 연결
        - 외부에서 호스트의 특정 포트로 요청이 들어오면, 해당 요청을 내부 컨테이너나 서버로 전달
        - `p <호스트 포트>:<컨테이너 포트>` 형식으로 포트 매핑
        - `p 8080:3000`이면, 호스트의 8080번 포트를 컨테이너의 3000번 포트로 연결함.
        
        ```bash
        docker run -it --rm my_base_image /bin/sh
        ```
        
    - **`it`**: 상호작용 모드로 실행하여 쉘을 열어줌
    - **`-rm`**: 컨테이너 종료 후 자동으로 삭제
    - **`my_base_image`**: 확인하려는 이미지 이름
    - **`/bin/sh`**: 컨테이너 내부의 셸에 접근

### **`docker build`**

- **설명**: 도커 이미지를 `Dockerfile`을 기반으로 빌드해.
- `docker build -t myapp:latest .`
    - **`-f`**
    - **파일 이름이나 경로가 기본값인 `Dockerfile`이 아닐 때, 도커 파일을 명시적으로 지정**하는 기능

### 3. **`docker exec`**

- **설명**: 실행 중인 컨테이너 안에서 명령 실행

```bash
docker exec -it <container_id> /bin/sh
# 실행 중인 컨테이너에 인터랙티브 셸을 열어주는 명령어
```

- `it`: 터미널 상호작용 모드로 실행.

### 2. **`docker ps`**

- 현재 실행 중인 도커 컨테이너 나열
- **옵션**
    - `a`: 중지된 컨테이너까지 포함해 모든 컨테이너 나열

### 3. **`docker stop`**

- **설명**: 실행 중인 컨테이너를 중지
- **예시**: `docker stop <container_id>`

### 4. **`docker start`**

- **설명**: 중지된 컨테이너를 다시 시작
- **예시**: `docker start <container_id>`

### 5. **`docker rm`**

- **설명**: 중지된 컨테이너를 삭제해.
- **예시**: `docker rm <container_id>`

### 6. **`docker rmi`**

- **설명**: 도커 이미지를 삭제해.
- **예시**: `docker rmi <image_id>`

### 7. **`docker pull`**

- **설명**: 도커 허브나 레지스트리에서 이미지를 다운로드해.
- **예시**: `docker pull nginx`

### 8. **`docker push`**

- **설명**: 로컬 도커 이미지를 도커 레지스트리(예: Docker Hub)에 업로드해.
- **예시**: `docker push username/repository:tag`

### 11. **`docker logs`**

- **설명**: 실행 중인 컨테이너의 로그 보기
- **예시**: `docker logs <container_id>`

### 12. **`docker images`**

- **설명**: 로컬에 있는 도커 이미지 나열해
- **예시**: `docker images`

### 13. **`docker-compose`**

- **설명**: 여러 컨테이너로 구성된 애플리케이션을 정의하고 관리하는 도구
    - `docker-compose.yml` 파일로 설정을 정의하고 쉽게 실행.
- **예시**: `docker-compose up -d`