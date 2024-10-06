function add(a, b) {
  return a + b
}

const elem = document.getElementById('result') as HTMLDivElement

if (elem) {
  elem.innerHTML = add(10, 20).toString()
}
