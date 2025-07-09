{
  const func = function () {
    console.log(arguments);
  };
  func();
}
{
  const obj = {
    0: false, // false : false
    1: '', // :
    2: 0, // obj[key]: 0
    3: null, // obj[key]: Nullish Coalescing
    4: undefined, // obj[key]: Nullish Coalescing
    5: NaN, // obj[key]: NaN
  };
  // console.log(...obj); 될리가 없잖아 객체 리터럴로 받아줘야함
  for (let key in obj) {
    console.log(`${obj[key]}: ${obj[key] ?? 'Nullish Coalescing'}`);
  }
}
