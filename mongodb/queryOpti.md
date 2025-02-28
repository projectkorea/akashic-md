# 쿼리 최적화

## `$IN` to `$NIN`

### 1. 핵심

- 100가지을 제외하고 나머지를 처리해야 하는 경우 `NIN` 연산자가 더 적합할 수 있다.

### 2. 로직

- 사용자가 선택한 필터가 상위 10개의 `age` 필터 내에 존재하는지 확인
- 선택된 필터가 `etc`를 포함하면, 상위 10개의 필터를 제외한 나머지 항목들만 필터링하기 위해 `NIN` 연산자를 사용
- `etc` 외의 다른 필터가 선택된 경우, 선택된 항목들은 `NIN`에서 제외하여 더 정확한 필터링을 구현

### 3. 구현

- 먼저 상위 10개의 `age` 필드를 가져오고, 리스트로 저장
- 사용자가 선택한 필터가 `etc`를 포함하면 `NIN` 연산자를 사용하여 상위 10개의 필드를 제외한 나머지 문서를 필터링.
- `etc` 외의 추가 선택 항목이 있으면, 해당 항목은 `NIN` 필터링에서 제외.

### 4. 코드 구조

```python
if 'etc' in selected_filters:
    # 상위 10개 age 필드 가져오기
    top_10_ids = [item['_id'] for item in get_age_fields()]

    # 상위 10개 필드 제외한 나머지 쿼리
    query['age'] = { "$nin": top_10_ids }

    # 선택된 age 필터 중 'etc' 외의 필터를 NIN에서 제외
    non_etc_filters = [age for age in selected_filters if age != 'etc']
    if non_etc_filters:
        query['age']['$nin'] = [age for age in top_10_ids if age not in non_etc_filters]

else:
    # 선택한 필터로 IN 연산자로 필터링
    query['age'] = { "$in": selected_filters }
    ```
    
5. 결과
    - `etc` 필터 선택 시, 성능을 최적화하기 위해 상위 10개의 필터는 제외하고 나머지 데이터만 처리.
    - 사용자가 선택한 특정 항목은 필요에 따라 `NIN` 필터에서 제외 가능.
    - 이를 통해 필터링 과정에서 불필요한 데이터 조회를 줄이고 성능 최적화 가능.
6. 응용:
    - 이 로직은 필터링 항목이 많을 때, 혹은 특정 항목을 제외해야 하는 시나리오에서 유용하게 사용될 수 있습니다.
    - 데이터 분석 및 대규모 데이터 처리 상황에서 유연한 필터링 방식으로 활용 가능.2