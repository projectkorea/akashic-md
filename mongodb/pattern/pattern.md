## 실제 프로젝트에서 자주 사용되는 패턴

1. 조건부 필드 추가

```js
{
    $set: {
        newField: {
            $cond: {
                if: { $조건 },
                then: { $값1 },
                else: { $값2 }
            }
        }
    }
}
{
    $set: {
        newField: {
            $cond: {
                if: { $조건 },
                then: { $값1 },
                else: { $값2 }
            }
        }
    }
}
```

2. 배열 필드 안전하게 처리

```js
{
    $set: {
        safeArray: {
            $ifNull: ["$existingArray", []]
        }
    }
}
```
