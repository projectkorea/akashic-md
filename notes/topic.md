# 토픽

## `innerHTML` vs `textContent` vs `innerText`

```html
<p id="demo">
	This     element 	has extra spacing 	and contains
	<span>a span element</span>
    .
</p>
```

```js
document.getElementById("demo").innerHTML
// "This        element has       extra spacing and contains <span>a span element</span>."

document.getElementById("demo").textContent
// "This         element has       extra spacing and contains a span element."

document.getElementById("demo").innerText
// "This element has extra spacing and contains a span element."

```

- The `innerHTML` property returns the text, including all spacing and inner element tags.
- The `textContent` property returns the text with spacing, but without inner element tags.
- The `innerText` property returns just the text, without spacing and inner element tags.

## `html`에서 공백문자는 `&nbsp`로 입력한다.

1) html content에 공백문자만 입력하면 **아무것도 입력을 받지 않는다.**

2) 다른 문자와 같이 입력을 받을 경우 공백문자 여러개는 **하나의 공백문자로만 입력된다.**