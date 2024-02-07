let answer = 0;

function DFS(arr, target, sum) {
  if (arr.length === 0) {
    if (target === sum) {
      answer += 1;
    }
    return;
  }
  DFS(arr.slice(1), target, sum + arr[0]);
  DFS(arr.slice(1), target, sum - arr[0]);
}

function solution(numbers, target) {
  DFS(numbers, target, 0);
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
