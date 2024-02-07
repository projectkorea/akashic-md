function solution(estimates, k) {
  let sum = 0;
  for (let i = 0; i < estimates.length - k + 1; i++) {
    const curSum = estimates.slice(i, i + k).reduce((acc, cur) => acc + cur, 0);
    curSum > sum && (sum = curSum);
  }

  return sum;
}

function dp_solution(estimates, k) {
  const n = estimates.length;
  let maxNum = 0;
  let partialNum = 0;
  let pos = 0;
  for (let i = 0; i < n; i++) {
    if (pos < k) {
      partialNum += estimates[i];
      pos++;
    } else {
      if
    }

    if (partialNum > maxNum) {
      maxNum = partialNum;
    }
  }

  return maxNum;
}
