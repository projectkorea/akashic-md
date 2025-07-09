# Stream vs Batch

## 결론

- 단순 읽기 → 스트림 처리
- 수정/복잡한 처리 → 배치 처리

### 스트림 처리

- 지속적인 처리로 **딜레이 없고,** 한 번에 전체 데이터를 **메모리**에 로드하지 않음

```jsx
const cursor = collection.find(query).stream()
const writeStream = fs.createWriteStream('output.csv')

cursor.on('data', (doc) => {
  writeStream.write(doc.email + '\\n')
})
```

### 배치 처리

```jsx
const BATCH_SIZE = 1000
let lastId = null

while (true) {
  const batch = await collection
    .find({ _id: { $gt: lastId } })
    .limit(BATCH_SIZE)
    .toArray()

  if (batch.length === 0) break

  await collection.bulkWrite(
    batch.map(doc => ({
      updateOne: {
        filter: { _id: doc._id },
        update: { $set: { processed: true } }
      }
    }))
  )

  lastId = batch[batch.length - 1]._id
}
```

### 고려사항

1. 적절한 배치 크기 설정
    - 메모리 사용량, 서버 부하, 처리 속도의 균형
2. 에러 처리와 재시도 로직
    - 실패한 배치 기록, 재시도 메커니즘
3. 모니터링
    - 진행 상황 추적, 성능 메트릭 수집

### 필요한 상황

1. 데이터 수정이 필요할 때
    - 사용자 정보 업데이트, 상태 변경, 데이터 정제
2. 외부 API 호출이 필요할 때
    - 각 문서마다 API 요청이 필요한 경우, Rate limiting 고려 필요
3. 복잡한 처리 로직이 필요할 때
    - 데이터 검증이 필요한 경우, 다른 컬렉션과의 조인이 필요한 경우
4. 트랜잭션이 필요할 때
    - 데이터 일관성이 중요한 경우, 롤백 가능성이 필요한 경우
