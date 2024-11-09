# MongoDB

## 공식 문서

- [MongoDB Manual](https://docs.mongodb.com/manual/reference/operator)

## 실습

- MongoDB Playground 활용
- 테스트 데이터베이스에서 다양한 시나리오 실습
- 실제 프로젝트의 복잡한 쿼리 분석

## 연산자

### 1단계: CRUD 기본 연산자
### 2단계: Array 연산자
### 3단계: Aggregation 기초

```md
[
    { $match: { /* 필터링 */ } },
    { $group: { /* 그룹핑 */ } },
    { $sort: { /* 정렬 */ } },
    { $project: { /* 필드 선택 */ } }
]
```

### 4단계: 복잡한 Pipeline 구성
### 5단계: 성능 최적화

## 고급 팁

1. explain() 사용하여 쿼리 성능 분석
2. 인덱스 활용 방법 이해
3. 복합 연산자 조합 연습
4. 대용량 데이터 처리 시 성능 고려
