# Multi-stage build

## 코드

```sh
# 1단계: 빌드
FROM node:16 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# 2단계: 실행
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
```

## 문법

1. `FROM`: 새로운 단계 생성 -> 새로운 햄버거 생성
2. `AS`: 각 단계에 이름을 붙임 -> 햄버거에 이름 붙이기
3. `COPY --from=이름` -> 다른 햄버거에서 원하는 재료만 가져오기
4. 각 명령어(COPY, RUN 등) = 햄버거에 들어가는 레이어들

## 장점

- 최종 이미지에는 실행에 필요한 파일만 들어가서 용량이 작아집니다
- 빌드 도구들은 최종 이미지에 포함되지 않아 보안이 좋아집니다
- 실제로는 개발 도구가 포함된 큰 이미지로 빌드하고, 실행은 작은 이미지로 하는 방식으로 많이 사용합니다.
