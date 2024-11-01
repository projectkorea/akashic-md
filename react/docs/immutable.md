# 불변성 관리방법

1. `State`가 객체, 배열인 경우
2. `immer`: 불변성 관리 패키지

## 1. `State`가 **객체**, **배열**인 경우

### 1) 바뀌지 않는 `state`

- **참조형 데이터**는 그 안의 요소를 바꿀 경우, 값이 변하지 않기 때문에 **리랜더링**이 되지 않는다.

```jsx
const [person, setPerson] = useState({
  name: "junha",
  school: "S.UNIV"
});

// ❌
const handleChange = (event) => {
    const { name, school } = event.target;
    const newPerson = person 
    // ❌ 원래의 값을 복사하면 바뀌는 게 없다.
    newPerson.name = name
    newPerson.school = school
    setPerson(newPerson);
};
```

### 2) 간단한 해결방법

- 객체를 새로 생성해, 값을 할당해준다.
- `destructuring` 이후 변경할 값을 넣어, 이전에 있던 값은 유지한다.
```js
// ✅
const handleChange = (event) => {
    const { name, school } = event.target;
    const newPerson = { ...person, name, school };
    setPerson(newPerson);
};
```


### 3) `Array.from()`을 이용해 state 값 갱신하기

```js
var newCards = Array.from(this.state.cards)
newCards.push(newObj)

this.setState({
  cards:newCards
})
```

- `Array.from`을 사용해서 복사한 다음, 사본에 `push`를 하고 `setState`를 호출하기 때문에 원본을 변경하지 않고 원본을 교체한다.
- 이외에도 `Object.assign()`을 이용해 객체의 내용을 바꾸지 않고 복제된 새 객체를 만들어 `setState`를 사용할 수 있다.

```js
var newArticle = Object.assign({isLoading:true}, this.state.article)
this.setState({ article: newArticle });
```

### 4) `array.prototype.concat`을 이용해 state 값 갱신하기

```js
let _cards = this.state.cards.concat(newObj);

this.setState({
  cards: _cards,
});
```

- `concat` 메서드를 이용하여 원본 데이터를 변경하지 않고 새로운 데이터를 생성하여 state값을 갱신하는 방법도 있다.

---


## 2. `immer`: 불변성 관리 패키지

### 1) `immer`를 사용하지 않았을 때

- 데이터의 구조가 복잡해지면 불변성을 지켜가며 코드를 작성하기 힘들어진다.

```js
const state = {
  posts: [
    {
      id: 1,
      title: '제목입니다.',
      body: '내용입니다.',
      comments: [
        {
          id: 1,
          text: '와 어쩜 그리 글을 잘 작성하시나요'
        }
      ]
    },
    {
      id: 2,
      title: '제목입니다.',
      body: '내용입니다.',
      comments: [
        {
          id: 2,
          text: '오늘부터 팬입니다'
        }
      ]
    }
  ],
  selectedId: 1
};
```

- 만약, posts 배열 안의 id 가 1 인 post 객체를 찾아서, comments 에 새로운 댓글 객체를 추가해줘야 한다고 가정해보자
- 그렇다면, 다음과 같이 업데이트 해줘야 한다.

```js
const nextState = {
  ...state,
  posts: state.posts.map(post =>
    post.id === 1
      ? {
          ...post,
          comments: post.comments.concat({
            id: 3,
            text: '새로운 댓글'
          })
        }
      : post
  )
};
```

- 코드 구조가 복잡하여 한 눈에 들어오지 않는다.
- `immer` 라이브러리를 사용하면 어떨까?


### 2) `immer` 체험하기

 - `immer` 를 사용하면 우리가 상태를 업데이트 할 때, 불변성을 신경쓰지 않으면서 업데이트를 해주면 `immer` 가 불변성 관리를 대신 해준다.

```js
const nextState = produce(state, draft => {
  const post = draft.posts.find(post => post.id === 1);
  post.comments.push({
    id: 3,
    text: '너무 편해요!'
  });
});
```

### 3) `immer` 사용하기

- `import produce from 'immer';`
- `produce` 함수의 첫번째 파라미터에는 수정하고 싶은 **상태**
- `produce` 함수의 두번째 파라미터에는 어떻게 업데이트하고 싶을지 정의하는 **함수**를 넣어준다. 불변성에 대해서 신경쓰지 않고 그냥 업데이트 해주면 다 알아서 해준다.

```js
const state = {
  number: 1,
  dontChangeMe: 2
};

const nextState = produce(state, draft => {
  draft.number += 1;
});

console.log(nextState);
// { number: 2, dontChangeMe: 2 }
```
