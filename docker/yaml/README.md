- `.yaml` `.yml`
    - YAML
        - 사람이 읽기 쉽게 설계된 데이터 직렬화 형식입니다.
        - 처음에는 **Yet Another Markup Language(또 다른 마크업 랭귀지)**로 불렸으나, 현재는 **데이터 직렬화를 위한 언어**로 정의합니다.
        - 더 이상 단순한 마크업 언어가 아님을 강조하기 위해 본말을 YAML의 본말은 **YAML Ain't Markup Language** 로 변경했습니다.
        - 주로 구성 파일에서 많이 사용되며, 특히 `Kubernetes`,  `Jenkins` , 그리고 클라우드 서비스 등에서 많이 활용됩니다. YAML은 간결하고 직관적인 문법을 가지고 있어 XML이나 JSON보다 쉽게 읽고 쓸 수 있습니다.
    
    ### 주요 특징
    
    1. **들여쓰기**: YAML의 구조는 들여쓰기로 결정됩니다. 들여쓰기는 공백이나 탭으로 할 수 있는데, 공백이 더 일반적입니다. 들여쓰기가 중요한 만큼 일관되게 사용하는 것이 중요합니다.
    2. **데이터 구조**: YAML은 세 가지 주요 데이터 구조를 지원합니다.
        - **맵(Map)**: 키-값 쌍의 집합입니다. JSON에서의 객체와 비슷합니다.
            
            ```yaml
            person:
              name: John
              age: 30
            ```
            
        - **리스트(List)**: 순서가 있는 항목들의 집합입니다. JSON의 배열과 비슷합니다.
            
            ```yaml
            fruits:
              - apple
              - banana
              - orange
            ```
            
        - **스칼라(Scalar)**: 단일 값, 문자열, 숫자 등을 나타냅니다.
            
            ```yaml
            name: "ChatGPT"
            version: 4
            ```
            
    3. **주석**: YAML에서는 `#` 기호로 주석을 달 수 있습니다.
        
        ```yaml
        # 이것은 주석입니다
        name: John  # 여기서도 주석을 추가할 수 있습니다
        ```
        
    4. **문자열 처리**: 큰따옴표나 작은따옴표를 사용해서 문자열을 감쌀 수 있습니다. 하지만 특별한 문자가 없으면 따옴표 없이도 문자열을 사용할 수 있습니다.
        
        ```yaml
        single_quote: 'Hello'
        double_quote: "Hello"
        unquoted: Hello
        ```
        
    5. **복잡한 데이터 구조**: YAML은 복잡한 데이터 구조도 직관적으로 표현할 수 있습니다.
        
        ```yaml
        person:
          name: John
          contacts:
            email: john@example.com
            phone: 123-456-7890
          pets:
            - name: Fido
              type: Dog
            - name: Whiskers
              type: Cat
        ```
        
    
    ### YAML 사용 예시
    
    ### Kubernetes의 Pod 설정
    
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: mypod
    spec:
      containers:
        - name: mycontainer
          image: nginx:1.14.2
          ports:
            - containerPort: 80
    ```
    
    ### CI/CD 파이프라인 설정 (예: GitLab CI)
    
    ```yaml
    stages:
      - build
      - test
      - deploy
    
    build_job:
      stage: build
      script:
        - echo "Building project..."
    
    test_job:
      stage: test
      script:
        - echo "Running tests..."
    
    deploy_job:
      stage: deploy
      script:
        - echo "Deploying project..."
    ```
    
    ### YAML을 사용하는 이유
    
    - **가독성**: 간단한 들여쓰기 구조 덕분에 쉽게 읽고 쓸 수 있습니다.
    - **데이터 직렬화**: 설정 파일이나 데이터를 효율적으로 저장하고 전달할 수 있습니다.
    - **유연성**: 다양한 애플리케이션에서 쉽게 사용할 수 있으며 JSON과 호환이 가능합니다.
    
    YAML 파일을 사용할 때는 들여쓰기 실수나 문법적인 오류가 발생하지 않도록 주의하는 것이 중요합니다.

- **YAML과 JSON 비교**
    
    **공통점**
    
    - 둘 다 데이터를 저장하고 교환하기 위한 포맷이다.
    - 키-값 쌍으로 구조화된 데이터를 표현할 수 있다.
    
    **YAML의 장점**
    
    1. **가독성**: 공백과 들여쓰기를 통해 계층을 표현하여 사람이 읽고 쓰기 편하다.
    2. **유연한 구조 표현**: 리스트, 맵 등의 다양한 형태를 지원해 계층 구조 작성이 용이하다.
    3. **주석 지원**: `#`을 이용한 주석 작성이 가능하다.
    4. **타입 명시**: 날짜나 숫자 타입을 자연스럽게 지원한다.
    
    **YAML의 단점 (JSON 대비)**
    
    1. **파싱 속도**: 복잡한 문법과 공백 민감성 때문에 JSON보다 느리다.
    2. **에러 발생 가능성**: 공백이나 들여쓰기 실수로 오류가 발생하기 쉽다.
    3. **지원 라이브러리 제한**: JSON에 비해 지원 라이브러리가 적고, 일부 환경에서 JSON 변환이 필요하다.
    4. **파일 크기**: 공백과 줄바꿈이 많아 JSON보다 파일 크기가 커질 수 있다.
    5. **브라우저 호환성**: 브라우저에서 직접 파싱하기 어려워, JSON보다 웹 환경에서 불리하다.
    
    **요약**
    
    YAML은 가독성과 유연성 측면에서 장점이 있으나, JSON보다 속도, 호환성, 안정성에서 불리하다.
    