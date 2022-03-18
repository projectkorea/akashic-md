# 파이썬 문법 복습


## 1. 기초 문법

### 1. 할당 조건문 
```py
num = num /2 if num % 2 == 0 else num \* 3 + 1
```


## 2. 리스트 문법

### 1. `reverse` VS `reversed`

```py
num = 1234
list(map(int, str(num)))

list(map(int, reversed((str(n)))))
# list(map(int, reversed(list(str(n)))))
```

- `map(타입, 이터러블)`에서 이터러블에 `str`도 올 수 있다.
- `array.reverse()`: 리스트 반환 X, 원본만 변형
- `reversed(이터러블)`: 리스트 반환 O

### 2. ''.join(li)

```py
def solution(n):
    li = sorted(map(int,list(str(n))),reverse=True)
    str_li = ''.join(li)
    return str_li
```

- 숫자만 있는 Array에 `''.join(Array)` 를 하면 숫자가 나오지 않는다.
- 문자로 바꿔서 처리해줘야한다. `''.join(map(int,Array))`
