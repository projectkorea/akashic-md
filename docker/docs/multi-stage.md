# Dockerfile의 멀티 스테이지 빌드(Multi-stage build)
    
  ```
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
  
  핵심 개념:
  
  1. 각 `FROM` 구문이 새로운 단계를 시작합니다
  2. `AS` 로 각 단계에 이름을 붙입니다
  3. `COPY --from=이름` 으로 이전 단계의 파일을 가져올 수 있습니다
  
  장점:
  
  - 최종 이미지에는 실행에 필요한 파일만 들어가서 용량이 작아집니다
  - 빌드 도구들은 최종 이미지에 포함되지 않아 보안이 좋아집니다
  
  실제로는 개발 도구가 포함된 큰 이미지로 빌드하고, 실행은 작은 이미지로 하는 방식으로 많이 사용합니다.
  