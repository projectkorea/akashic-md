## 다시 한번 눈여겨볼 것들

### 토이프로젝트: 트위터 클론 마크업

<p>
<img src="https://github.com/projectkorea/study-html-css/blob/main/HTML/%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%ED%8A%B8%EC%9C%84%ED%84%B0.PNG" width=500px>
<img src="https://github.com/projectkorea/study-html-css/blob/main/HTML/%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EA%B5%AC%ED%9A%8D.PNG" width=500px>
</p>

1. 레이아웃에 따라 `Header`안에 `Nav`를 넣기도한다.  

2. 링크가 있는 이미지는 `a`태그로 감싼다.  
```html
<a href="#">
  <img src="#" alt="Twitter" />
</a>
```

3. `nav`안에 `h1`를 넣는 이유는 aria label로, css로 `display:None`처리하면 된다.
```html
<nav>
  <h1>Global Navigation Menu</h1>
  <ul>
  </ul>
</nav>
```
4. `nav`메뉴의 아이콘, 글자는 `li`태그로 감싸 동일 레벨에 넣는다.  
```html
<li>
  <a>
    <img alt="icon"/>
    Menu1
  </a>
</li>
```
5. 4번의 연장선상에서 아이콘 위에 숫자로 표시를 할 때의 마크업은 동일 레벨에 한다. 
```html
<a href="#">
  <strong aria-label="5 Unread notifications">5</strong>
  <img alt="icon"/>
  Notifications
</a>
```

6. `section`태그로 감싼 후 `h1`태그로 내용을, `form` 태그로 양식을 채울 버튼과 인풋 태그를 넣어준다.
```html
<section>
  <h1></h1>
  <form>
    <img/>
    <textarea/>
    <input/>
    <button></button>
  </form>
</section>
```
7. `header`, `footer`태그는 섹션닝 엘리멘트에서 상단부, 하단부를 나눌 때 사용한다.
```html
<nav><section><article><aside><article><main>
  <head></head>
  <footer></footer>
</nav></section></article></aside></article></main>
```
8. `dt`태그로 `dd`태그의 레이블을 달아주되, css로 시각적 요소를 숨긴다.
```html
<dl>
  <div>
    <dt>Username</dt>
    <dd>David Signel</dd>
  </div>
<dl>
```

9. `button` 태그에 `span` 태그를 넣어 추가정보를 기입할 수 있다.
```html
 <button>
  <span class="sr-only">Tweet your reply</span>
  <strong aria-label="3 replied">3</strong>
</button>
```

10. `button` 태그와 `a` 태그를 구분할 때, `a` 태그는 주소를 이동한다는 의미로 구분하자.
```html
<footer>
    <a>링크1</a>
    <a>링크2</a>
    <button>더 보기</button>
    <div>
        <a>링크3</a>
        <a>링크4</a>
    </div>
</footer>
```