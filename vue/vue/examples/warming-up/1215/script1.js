document.write("It's text tag from JS");
document.write("<h1>It's h1 tag from JS</h1>");
document.write(3 + 5);
document.write('<p>3 + 5</p>');

var answer = confirm('19세 이상이신가요?');
answer && alert('경고'); // documnet는 웹 API이기 때문에 alert뜨기 전에 출력이 되지 않는다.

var age = prompt('나이를 입력하세요');
console.log(answer, age);
