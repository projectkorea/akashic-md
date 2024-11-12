# basicTerm

## cursor

- 쿼리 결과를 탐색하는 데 사용되는 객체
- 쿼리 결과를 순회하기 위한 포인터
- **대용량 데이터**를 다룰 때 메모리 효율성을 위해 중요한 역할을 한다

### 예시1

```js
const cursor = collection.find({
    score: { $exists: true },
    appGender: 'F'
});
```

- `find()` 메서드
- 데이터베이스에서 특정 조건에 맞는 문서(레코드)를 찾고 있습니다.
- 일치하는 문서들을 담고 있는 **커서(cursor)** 객체를 반환합니다.
- 커서는 결과 문서 집합을 순차적으로 접근할 수 있는 포인터 역할을 하며, 쿼리 결과를 한 번에 모두 메모리에 로드하지 않고, 필요할 때마다 조금씩 가져와서 처리할 수 있게 해줍니다.
- 결과 집합이 매우 클 때 메모리 사용을 최적화하는 데 도움이 됩니다.
- `cursor`는 다음과 같은 작업에 사용할 수 있습니다:
  - 결과 집합을 하나씩 순회하며 문서를 처리
  - 특정 개수만큼의 문서만 가져오기 (예: `cursor.limit(10)`)
  - 결과를 특정 기준에 따라 정렬 (예: `cursor.sort({score: -1})`)

### 예시2

```javascript
// 커서를 사용하지 않는 경우 (모든 데이터를 한 번에 메모리에 로드)
const allDocs = await collection.find().toArray();  // 메모리에 전부 로드됨
allDocs.forEach(doc => {
    // 처리
});

// 커서를 사용하는 경우 (스트리밍 방식으로 한 번에 일부만 로드)
async function() {
    const cursor = collection.find();
    while (await cursor.hasNext()) {
        const doc = await cursor.next();  // 한 document씩 처리
        // 처리
    }
}
```

## 커서의 주요 특징

1. 메모리 효율성

```javascript
// 백만 건의 document가 있다고 가정
const cursor = collection.find();
// 커서는 실제 데이터를 바로 가져오지 않고, 필요할 때마다 가져옴
while (await cursor.hasNext()) {
    const doc = await cursor.next();
    // 한 번에 한 document만 메모리에 로드
}
```

2. 배치 처리 가능
```javascript
const batchSize = 1000;
const cursor = collection.find().batchSize(batchSize);
let batch = [];

while (await cursor.hasNext()) {
    batch.push(await cursor.next());
    if (batch.length === batchSize) {
        await processBatch(batch);
        batch = [];
    }
}
```

3. 타임아웃 관리
```javascript
const cursor = collection.find().maxTimeMS(5000); // 5초 타임아웃
// 또는
const cursor = collection.find().noCursorTimeout(); // 타임아웃 없음
```

4. 리소스 관리
```javascript
try {
    const cursor = collection.find();
    while (await cursor.hasNext()) {
        // 처리
    }
} finally {
    await cursor.close(); // 리소스 해제
}
```

실제 사용 예시:
```javascript
async function processLargeDataset() {
    const cursor = collection.find({
        status: 'pending'
    }).sort({ createdAt: 1 });

    try {
        let count = 0;
        while (await cursor.hasNext()) {
            const doc = await cursor.next();
            await processDocument(doc);
            count++;
            
            if (count % 1000 === 0) {
                console.log(`Processed ${count} documents`);
            }
        }
    } finally {
        await cursor.close();
    }
}
```

#### 사용해야 하는 경우

1. 대용량 데이터 처리
2. 메모리 제한이 있는 환경
3. 스트리밍 방식의 처리가 필요한 경우
4. 실시간 데이터 처리가 필요한 경우

#### 사용하지 않아도 되는 경우

1. 작은 데이터셋
2. 모든 데이터를 한 번에 메모리에 로드해도 문제없는 경우
3. 단순 쿼리나 집계
