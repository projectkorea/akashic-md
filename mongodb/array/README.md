# 배열 연산자

```md
$isArray      // 배열 체크
$push         // 배열에 요소 추가
$addToSet     // 중복없이 배열에 추가
$pull         // 배열에서 요소 제거
$pop          // 배열 처음/끝 요소 제거
$slice        // 배열 자르기
$in           // 배열 내 존재 여부
$all          // 모든 요소 포함 여부
$concatArrays // 배열 합치기
```

1. **$push**: 배열에 요소를 추가. 중복을 허용하며, 새로운 요소가 항상 배열 끝에 추가돼.

```js
{ $push: { tags: "newTag" } }
```

2. **$addToSet**: 배열에 중복되지 않는 경우에만 요소를 추가. 중복 요소를 방지하고 싶을 때 사용해.

```js
{ $addToSet: { tags: "uniqueTag" } }
```

- **$each**와 함께 사용해서 여러 요소를 한 번에 추가할 수 있어.

```js
{ $addToSet: { tags: { $each: ["tag1", "tag2"] } } }
```

3. **$pop**: 배열에서 요소를 제거해. `1`을 주면 배열의 마지막 요소, `-1`을 주면 첫 번째 요소를 제거해.

```js
{ $pop: { tags: 1 } }  // 마지막 요소 제거
```

4. **$pull**: 배열에서 특정 조건에 맞는 요소를 모두 제거해. 예를 들어, 특정 값을 가진 요소나 조건에 맞는 요소를 삭제할 때 사용해.

```js
{ $pull: { tags: "tagToRemove" } }
```

5. **$pullAll**: 배열에서 지정된 여러 요소를 한 번에 제거할 때 사용해.

```js
{ $pullAll: { tags: ["tag1", "tag2"] } }
```

6. **$slice**: 배열의 특정 범위로 잘라내는 용도로 `$push`와 함께 사용해. 예를 들어, 배열이 일정 길이를 넘어가면 처음 몇 개만 남기고 나머지를 제거할 때 유용해.

```js
{ $push: { tags: { $each: ["tag3"], $slice: -5 } } }
```

7. **$elemMatch**: 배열의 요소 중 특정 조건을 만족하는 요소를 조회할 때 사용해.

```js
db.collection.find({ tags: { $elemMatch: { $eq: "specificTag" } } })
```
