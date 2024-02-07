function findUniqueNumbers(numbers) {
  let sorted = numbers.sort((a, b) => a - b);
  let duplicated = [];
  let unique_set = new Set(numbers);

  for (let i = 0; i < sorted.length; i++) {
    sorted[i] === sorted[i + 1] && duplicated.push(sorted[i]);
  }

  for (item of duplicated) {
    unique_set.delete(item);
  }

  return [...unique_set];
}

let result = findUniqueNumbers([1, 2, 1, 3]);
console.log(result);
