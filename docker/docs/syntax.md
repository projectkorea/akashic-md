### 1. **`FROM`**

- Dockerfile의 기본 이미지(base image)를 지정
- Docker 이미지 빌드는 항상 `FROM`으로 시작되며, 이 명령어를 통해 컨테이너가 어느 환경을 기반으로 할지를 정해.
- **형식**: `FROM <이미지 이름>:<태그>`
- **예시**:
이 예시는 **Node.js 18 버전**이 포함된 경량 Alpine Linux를 기반으로 이미지를 빌드한다는 의미야.
    
    ```
    FROM node:18-alpine
    ```
    

### 2. **`RUN`**

- **기능**: **이미지 빌드 도중 실행할 명령어**를 지정해. 주로 패키지 설치, 파일 복사, 소스 코드 빌드 등의 작업을 수행해. 각 `RUN` 명령은 Docker 이미지의 새로운 레이어를 생성하며, 이미지 빌드 단계에서만 실행돼.
- **형식**: `RUN <명령어>`
- **예시**:
이 명령어는 이미지를 빌드하는 과정에서 **npm을 이용해 패키지 설치**를 진행하는 거야.
    
    ```
    RUN npm install
    ```
    
    - **`RUN` 명령어는 Docker 레이어를 만듭니다.**
        
        Docker 이미지가 빌드될 때, 각 `RUN` 명령어는 새로운 레이어(layer)를 생성합니다. 이는 Docker의 이미지 캐싱 및 레이어 기반 구조 때문입니다. Docker는 이미지의 각 명령어(`RUN`, `COPY`, `ADD` 등)를 실행할 때마다 해당 명령의 결과를 캐시하여 레이어를 생성합니다. 이 레이어는 다음 단계로 전달되어 이미지가 단계적으로 쌓이게 됩니다.
        
        ```docker
        FROM base_ubuntu_python312_node20_mongodb7_20240628
        
        # 하나의 레이어 생성
        RUN apt-get update
        
        # 또 다른 레이어 생성
        RUN apt-get install -y curl
        ```
        
        각 `RUN` 명령어는 그 자체로 캐시될 수 있는 하나의 레이어가 되고, Docker는 이를 재사용하거나 빌드 중단 시 다시 사용할 수 있습니다. 만약 이미 해당 레이어가 변경되지 않았으면 Docker는 이 단계를 다시 실행하지 않고 캐시된 레이어를 사용합니다.
        

### 3. **`CMD`**

- **기능**: 컨테이너가 **실행될 때 수행할 명령**을 지정해. `CMD`는 기본적으로 하나의 컨테이너에 하나만 있어야 하고, 컨테이너가 시작될 때 해당 명령어가 실행돼. `CMD`는 **이미지를 빌드할 때 실행되는 게 아니라, 컨테이너가 실행될 때만 실행**돼.
- **형식**: `CMD ["실행 파일", "옵션1", "옵션2"]` 또는 `CMD <명령어>`
- **예시**:
이 명령어는 컨테이너가 실행될 때 **Node.js로 `app.js` 파일을 실행**한다는 뜻이야.
    
    ```
    CMD ["node", "app.js"]
    ```
    

### 4. **`WORKDIR`**

- **기능**: 작업 디렉토리를 설정하는 명령어로, **이후 명령어들이 실행될 기본 디렉토리**를 정의해. 여러 `WORKDIR` 명령어가 있을 경우, 각각이 누적되면서 경로를 설정해 줘.
- **형식**: `WORKDIR <경로>`
- **예시**:
이후 명령들은 `/app` 디렉토리에서 실행되게 돼.
    
    ```
    WORKDIR /app
    ```
    

### 5. **`COPY`**

- **기능**: **호스트 시스템의 파일이나 디렉토리를 이미지의 특정 경로로 복사**하는 명령어야. 주로 프로젝트 소스 파일들을 이미지에 복사하는 데 사용해.
- **형식**: `COPY <호스트 경로> <컨테이너 경로>`
- **예시**:
현재 디렉토리(`.`)의 모든 파일을 컨테이너의 `/app` 디렉토리로 복사해.
    
    ```
    COPY . /app
    ```
    

### 6. **`EXPOSE`**

- **컨테이너에서 열어줄 포트를 명시, 문서화 목적으로 주로 사용**
- 실제 포트 열기는 `docker run` 시 `p` 옵션을 사용해 실행해야함
    
    ```
    EXPOSE 3000
    ```
    

### 4. **`ENV`**

- **기능**: **환경 변수를 설정**하는 명령어로, 컨테이너 내에서 특정 환경 변수를 정의할 수 있어. 이 환경 변수는 이후 컨테이너 실행 시 사용할 수 있어.
- **형식**: `ENV <변수명>=<값>`
- **예시**:`NODE_ENV`라는 환경 변수를 `production`으로 설정해.
    
    ```
    ENV NODE_ENV=production
    ```
    

### 7. **`ENTRYPOINT`**

- **기능**: 컨테이너가 **실행될 때 항상 실행될 명령어**를 지정해. `CMD`와 비슷하지만, `ENTRYPOINT`는 **항상 고정된 명령어**를 설정하고, 이를 통해 `CMD`의 매개변수를 받을 수 있어.
- **형식**: `ENTRYPOINT ["실행 파일", "옵션"]`
- **예시**:
이 명령어는 컨테이너가 실행될 때 `npm start`를 실행하게 돼.
    
    ```
    ENTRYPOINT ["npm", "start"]
    ```
    

### 요약:

- **`WORKDIR`**: 작업 디렉토리 설정.
- **`COPY`**: 파일 복사.
- **`EXPOSE`**: 컨테이너에서 열어줄 포트.
- **`ENV`**: 환경 변수 설정.
- **`ENTRYPOINT`**: 컨테이너 실행 시 고정된 명령어 설정.