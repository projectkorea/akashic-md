var name = 1;
function outer() {
  var name = 'junha';
  console.log(name);
  function outer2() {
    console.log(name);
  }
  outer2();
}

outer();
