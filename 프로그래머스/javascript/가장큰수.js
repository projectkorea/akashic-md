function solution(numbers) {
  const result = numbers
    .map((number) => String(number))
    .sort((a, b) => b + a - (a + b)) // 💛
    .join('');
  return result[0] === '0' ? '0' : result;
}

console.log(solution([6, 2, 10]));

// sort((a,b) => (b+a)-(a+b)) = 문자로 변환된 숫자를 연결하여 비교정렬
// ( '3', '30' => ('303')-('330'))
