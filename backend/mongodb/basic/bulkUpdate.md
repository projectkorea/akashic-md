# 벌크 업데이트

1. MongoDB의 내장 기능
    1. 모든 문서를 애플리케이션 레벨에서 처리하지 말고, **MongoDB 자체에서 업데이트하면 더 효율적임**
    2. 네트워크 트래픽 줄이고 데이터 전송 시간 절약 가능함.
2. Bulk Update 사용
    1. 여러 문서를 한 번에 업데이트하면 네트워크 호출 횟수 줄어들어 성능 개선

```js
  async function bulkUpdateUsersFaceDocuments() {
    const bulkOps = [];

    console.log("[Info] Fetching documents with string score field");
    
    const cursor = collection.find({ score: { $exists: true, $type: 'string' } });
    while (await cursor.hasNext()) {
      const document = await cursor.next();
      const score = Number(document.score);
      if (!isNaN(score)) {
        bulkOps.push({
          updateOne: {
            filter: { _id: document._id },
            update: { $set: { score: score } }
          }
        });
        console.log(`[Info] Prepared update for document with _id: ${document._id}, score: ${score}`);
      }
    }

    if (bulkOps.length > 0) {
      console.log(`[Info] Executing bulk update for ${bulkOps.length} documents`);
      const result = await collection.bulkWrite(bulkOps);
      console.log(`[Success] Bulk update completed with ${result.modifiedCount} documents modified`);
      return result;
    } else {
      console.log("[Info] No documents to update");
      return { modifiedCount: 0 };
    }
  }
```
