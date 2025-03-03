# 쿼리 최적화 `$nin`를 활용한 상위 N개 제외 필터링

## 1. 상황

- 필터링 항목이 많을 때, 상위 n개의 필드를 제외하고 나머지 모두를 쿼리해야할 경우

## 2. 로직

- 상위 10개의 `age` 필드를 집계하여 리스트로 저장
- `etc` 필터 선택 시:
  - `$nin` 연산자로 상위 10개 필드를 제외한 나머지 문서 필터링
  - 다른 필터가 함께 선택된 경우, 해당 필터는 `$nin`에서 제외하여 필터링 구현
- `etc` 미선택 시: 선택된 필터만 `$in` 연산자로 필터링

## 3. 코드

```python
def get_age_distribution():
    """상위 10개의 age 필드와 나머지('etc') 집계 결과를 반환
    Returns:[{'_id': 20, 'count': 1500}, ..., {'_id': 'etc', 'count': 1800}]
    """
    age_distribution = list(store_face.aggregate([
        {'$group': {'_id': '$age', 'count': {'$sum': 1}}},
        {'$sort': {'count': -1}},
        {'$limit': 10}
    ]))
    
    other_ages_count = list(store_face.aggregate([
        {'$group': {'_id': '$age', 'count': {'$sum': 1}}},
        {'$match': {'_id': {'$nin': [item['_id'] for item in age_distribution]}}},
        {'$group': {'_id': 'etc', 'count': {'$sum': '$count'}}}
    ]))
    
    if other_ages_count:
        age_distribution.append(other_ages_count[-1])
    
    return age_distribution
```

```python
if 'etc' in selected_filters:
    top_10_ids = [item['_id'] for item in get_age_distribution()]

    query['age'] = { "$nin": top_10_ids }

    non_etc_filters = [age for age in selected_filters if age != 'etc']
    if non_etc_filters:
        query['age']['$nin'] = [age for age in top_10_ids if age not in non_etc_filters]

else:
    query['age'] = { "$in": selected_filters }
```
