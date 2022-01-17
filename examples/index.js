// console.dir(Node);

const nodeAnchor = document.querySelector('a');
let props = [];

for (let key in nodeAnchor) {
  props.push(key);
}

console.dir(props.sort());

for (var key in Node) {
  console.log(key, Node[key]);
}
