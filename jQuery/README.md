# jQuery Snippets

## `.attr()` vs `.prop()`

```js
$(parent).click(() => {
    $(child).prop('checked', function () {
        // 화살표함수를 쓰면 this 바인딩 못씀!
        return !$(this).prop('checked') // 여기서의 this는 child임
    });
});
```

- **`.attr()`**: Used to get or set element attributes (e.g., `style`, `src`, `rowspan`).
    - Before an element is checked, the `checked` attribute might be `undefined`.
- **`.prop()`**: Used to manage the actual state of elements (e.g., activation, checked, selected).
    - The value retrieved with `.prop()` returns `true` or `false`.

## `.click()`

```js
$(this).click(); // Triggers a click event programmatically

$(this).click(clickHandler); // Adds a click event listener
```

## `$.ajax()`

```js
$.ajax({
    type: 'get',
    url: data[k].photoURL,
    async: false, // Should the AJAX request be asynchronous?
    success: function() {},
    error: function(xhr, ajaxOptions, thrownError) {}
});
```

## `.is()`

```js
// Similar to querySelector
$("#div_test").is(".apple") === true;
```

## `.each()`

```js
$("input[name=chkbox]:checked").each(function(){
    var value = $(this).val();
});

// Vanilla JS equivalent
document.querySelectorAll("input[name=chkbox]:checked").forEach(function(elem){
    var value = elem.value;
});
```

## `.css()`

```js
$('h1').click(function(e) {
    $(this).css('background-color', 'yellow');
});
```

## `.toggle()`

```js
$('li').on('click', function(e){
    e.stopPropagation();
    $(this).find('ul').toggle(); // Toggles between display: none and display: block
});
```

## Class Manipulation

```js
// Add a class
$(this).addClass('className');

// Remove a class
$(this).removeClass('className');

// Replace a class
$(this).attr('beforeClassName', 'afterClassName');

// Check if an element has a class
$(".elem").hasClass("className") === true;
```

