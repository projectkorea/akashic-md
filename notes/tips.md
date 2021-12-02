# tips

## Shorthand property names

```js
const name = 'junha';
const age = '20';
const junha = { name, junha };
console.log(junha); // {name: 'junha', age: '20'}
```

## Destructuring assignment

```js
const car = { name: 'Auid', age: '2022' };
const { name, age } = car;
console.log(name, age); // Audi 2022
```

```js
const animals = ['dog', 'cat'];
const [first, second] = animals;
console.log(first, second); //dog cat
```

## Spread Syntax

```js
const junha = {
    name: 'junha',
    age: '20',
    skill: 'js',
};

const junhaJunior = { ...junha, skill: 'java' }; // spreadSyntax 도중 값을 바꿀 수 있음
```

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concatArr = [...arr1, ...arr2];
```

## Default Parameter

```js
// Before

function print(msg) {
    if (msg === null) {
        msg = 'default msg';
    }
    console.log(msg);
}

print();
```

```js
// After

function print(msg = 'default mag') {
    console.log(msg);
}

print();
```

-   Default parameter is only for `undefined`.
-   msg가 `undefined`인 경우에만 자동으로 할당된다.

---

## Optional Chaining (ES11)

```js
const person1 = {
    name: 'junha',
    job: {
        title: 'Engineer',
        manager: {
            name: 'Bob',
        },
    },
};

const person2 = {
    name: 'yunjung',
};

function print(person) {
    console.log(person.job?.manager?.name);
}

print(person1); // bob
print(person2); // undefined
```

## Nullish Coalescing Operator (ES11)

-   ?? 연산자: `null`과 `undefined` 일 경우에만 작동한다.
-   false: `false`, `''`, `0`, `null`, `undefined`

```js
{
    const obj = {
        0: false,
        1: '',
        2: 0,
        3: null, // Nullish Coalescing
        4: undefined, // Nullish Coalescing
        5: NaN,
    };

    for (let key in obj) {
        console.log(`${obj[key]}: ${obj[key] ?? 'Nullish Coalescing'}`);
    }
}
```

-   leftExpr() ?? rightExpr() 형태이기 때문에 `const result = func1() ?? func2()`도 가능하다.

## Async · Await

```js
// Before
function displayUser(){
    fetchUser()
    .then((user)=>{
        fetchProfile(user)//
        .then((profile))=>{
            updateUI(user,profile)
        }
    })
}
```

```js
// After
async function displayUser() {
    const user = await fetchUswer();
    const profile = await fetchProfile(user);
    updateUI(user, profile);
}
```

## Quiz

-   Remove duplicates `['a','a','b','b','c','d','e']` and return as an array.

```js
const arr = ['a', 'a', 'b', 'b', 'c', 'd', 'e'];
const answer = [...new Set(arr)];
console.log(answer);
```
