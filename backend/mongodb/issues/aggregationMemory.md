# Aggregation memory issue

- 배치사이즈 100만 추가 후 에러 발생
- 메모리 할당량 초과하지 않으면서 일을 분산해서 처리할 있는 방법?
- `tools/migration_script`

```bash
[Error] during the migrate score to firebase job: 
MongoServerError: PlanExecutor error during aggregation :: caused by 
:: Sort exceeded memory limit of 104857600 bytes, but did not opt in to external sorting.
```
