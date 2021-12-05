# Markdown Tutorial

-   Markdown can be easily shared between computers, mobile phones, and people. It’s quickly becoming the writing standard for academics, scientists, writers, and many more. Websites like GitHub and reddit use Markdown to style their comments.

## 줄바꿈, 문단구분

-   줄바꿈: `<br/>`, 라인의 마지막에 `공백 두 칸`
-   Enter 하나를 입력하면 줄바꿈이 되지 않는다.
-   문단 구분: `Enter` 두 번 입력
-   h1 태그인 `#`에서도 자동으로 구분선이 생긴다.
-   구분선: `___`, `---`, `<hr/>`

## 글꼴 서식

-   `*이탤릭체*`, `_이탤릭체_`
-   `**볼드체**`, `__볼드체__`
-   `~~취소선~~`
-   Bullted list: `*`, `+`, `-`
-   toggle: `-[]`, `- [x] ` 깃허브 md에서 가능하다.

## 인용문(Blockquote)

-   `>`을 앞에 붙여준다.
-   빈 문장까지 인용문 서식을 적용하려면 공백칸에도 `>`를 붙여준다.
    > If you can imagine it, you can achieve it; if you can dream it, you can become it.
    >
    > There is blank space but, it's still worked

## 링크, 이미지

-   링크 문법: `[글자](URL)`
-   이미지 문법: `![이미지 설명 글](URL)`, `<img width="">`
-   링크 설명칸에서 글꼴 서식:
    -   `[링크 설명칸에도 **글꼴 서식**이 적용된다 ](www.github.com)`
    -   [링크 설명칸에도 **글꼴 서식**이 적용된다 ](www.github.com)
-   링크를 따로 정의:

    ```markdown
    링크 URL을 [따로 정의할 수도 있다][variable]

    <!-- 정의 칸은 한 줄을 띄어야 한다. -->

    [variable]: www.gitbub.com

    ![yellow cat][cute cat]
    ```

    -   링크 URL을 [따로 정의할 수도 있다][variable]
    -   ![yellow cat][cute cat]

    [variable]: www.gitbub.com
    [cute cat]: http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22221-cat-icon.png

## 테이블

-   `|`는 두개만 붙여도 된다. Prettier에서 자동완성됌.

```markdown
| 애칭 혹은 별멍 |  출생년도  |       특기 |
| :------------- | :--------: | ---------: |
| 냥이           | 2021.12.05 | 애교부리기 |
```

| 애칭 혹은 별멍 |  출생년도  |       특기 |
| :------------- | :--------: | ---------: |
| 냥이           | 2021.12.05 | 애교부리기 |
