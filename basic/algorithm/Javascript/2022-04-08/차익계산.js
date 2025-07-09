function solution(price) {
  let result = [];

  for (let i = 0; i < price.length - 1; i++) {
    const todayPrice = price[i];
    let temp = 0;
    for (let nextDayPrice of price.slice(i + 1)) {
      temp++;
      if (nextDayPrice - todayPrice > 0) {
        result.push(temp);
        break;
      }
    }
    result[i] || result.push(-1);
  }
  result.push(-1);
  return result;
}

console.log(solution([4, 1, 4, 7, 6]));
console.log(solution([13, 7, 3, 7, 5, 16, 12]));
