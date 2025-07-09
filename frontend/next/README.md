# Next.js

## 용어

- Suspense
    - **정의**: 영화, 소설, 이야기 등에서 다음에 어떤 일이 일어날지에 대한 긴장감이나 불확실성을 의미합니다.
    - **용례**: "The movie kept the audience in suspense until the very end."
    - React의 `<Suspense>` 컴포넌트는 이 긴장감의 개념을 차용하여, 비동기 작업이 완료될 때까지 대체 UI를 표시합니다.
- Suspend
    - **정의**: 일시적으로 작업을 중단하거나 지연시키는 일반적인 용어입니다.
    - **용도**: 특정 비동기 작업이 완료될 때까지 컴포넌트 렌더링을 지연시킴.
    - **예시**: 비동기 함수가 `suspend` 상태를 트리거하여 `<Suspense>` 컴포넌트가 대체 UI를 표시하도록 함
- prefetch
    - Link 컴포넌트가 viewport안에 들어오면 알아서 prefetch가 된다.
    - 디폴트로 `true`임
- Streaming Rendering
    - 스트리밍 렌더링: 서버에서 렌더링 작업을 여러 청크로 나누어 준비되는 대로 클라이언트에 전송하는 방식으로 parallel랜더링이 됌.
    - Parallel 렌더링: 여러 컴포넌트가 병렬로 렌더링되고, 클라이언트는 이를 병렬로 받아 하이드레이션함
    - Sequential 렌더링은 Parallel 렌더링의 효율성과 성능 개선 효과를 강조하기 위해 걍 비교군으로 사용된 것임
    - 파란색: 서버에서 컴포넌트를 렌더링하고 클라이언트로 HTML을 전송하는 시간
    - 보라색: 클라이언트 사이드에서 추가적인 JavaScript를 실행하여 UI를 동적으로 렌더링하는 시간
        
        ![스크린샷 2024-08-23 오후 5.54.46.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/878a9f65-c6ce-4809-a815-0ab51a08ec1c/9964008d-d4c0-4d11-8438-783f61967013/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-08-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.54.46.png)
        
- RSC Payload
    1. 하이브리드 랜더링
    2. 압축된 바이너리 데이터 → 네트워크 부담 덜 
    3. 경계 관리
- SSR vs CSR
    - 서버에서 캐싱, 보안
    - 클라에서 덜 부담
    - 서바랑 데이터 주고받고 안하고 서버에서 처리해버리니
    - 사용성 장점
- 캐싱
    
    https://fe-developers.kakaoent.com/2024/240418-optimizing-nextjs-cache/