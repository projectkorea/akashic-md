function solution(office, k) {
  let result = 0;
  const cnt = office.length - k + 1;
  for (let i = 0; i < cnt; i++) {
    for (let j = 0; j < cnt; j++) {
      let temp = 0;
      for (let n = 0; n < k; n++) {
        for (let m = 0; m < k; m++) {
          office[i + n][j + m] === 1 && temp++;
        }
      }
      temp > result && (result = temp);
    }
  }
  return result;
}

// console.log(
//   solution(
//     [
//       [1, 0, 0, 0],
//       [0, 0, 0, 1],
//       [0, 0, 1, 0],
//       [0, 1, 1, 0],
//     ],
//     2
//   )
// );

console.log(
  solution(
    [
      [1, 0, 0],
      [0, 0, 1],
      [1, 0, 0],
    ],
    2
  )
);
