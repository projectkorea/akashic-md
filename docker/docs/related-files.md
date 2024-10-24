1. **`Dockerfile`**
    - Docker 이미지를 빌드하기 위한 설정 파일
    - 이미지 빌드 단계별로 필요한 명령어로 작성
        
        ```docker
        # 베이스 이미지 지정
        FROM ubuntu:20.04
        
        # 작업 디렉토리 설정
        WORKDIR /app
        
        # 애플리케이션 파일 복사
        COPY . /app
        
        # 필요한 패키지 설치
        RUN apt-get update && apt-get install -y python3
        
        # 컨테이너 시작 시 실행할 명령어
        CMD ["python3", "app.py"]
        ```
        
2. **`Dockerfile_base`**
    - 공통 설정과 패키지 설치를 포함한 기본 설정 파일
    - 빌드 시간을 줄이고 일관성을 유지하기 위해 사용
    
    ```docker
    FROM base_ubuntu_python312_node20_mongodb7_20240628
    
    WORKDIR /work
    
    COPY package.json /work/
    COPY requirements.txt /work/
    
    RUN npm install
    RUN pip install -r requirements.txt
    
    COPY admin_server.py /work/
    COPY keys /work/keys
    COPY src /work/src
    COPY templates /work/templates
    COPY run.sh /work/
    RUN chmod +x run.sh
    
    CMD ["/work/run.sh"]
    
    # FROM -> 이미지
    # WORKDIR -> cd 같은 디렉토리 변경 명령어
    # WORKDIR 어떤경로에 실행할건지 app이라는 폴더에 카피해오겠다
    # COPY -> 현재 프로젝트에서 컨테이너로 복사해갈 파일
    ```
    
3. **`.dockerignore`**
    - Docker 빌드 컨텍스트에서 무시할 파일 및 디렉토리를 지정하는 파일
    - Git의 `.gitignore` 파일과 유사하게, 빌드에 포함되지 않아야 할 파일들 명시
4. **`docker-compose.yml`**
    - 여러 컨테이너를 정의하고 관리하기 위한 설정 파일
    - 서비스, 네트워크, 볼륨 등을 정의하여 여러 컨테이너를 하나의 애플리케이션으로 구성
        
        ```yaml
        version: '3'
        services:
          web:
            image: my-web-app
            ports:
              - "5000:5000"
          database:
            image: postgres
            environment:
              POSTGRES_USER: example
              POSTGRES_PASSWORD: exampl
        ```
        
