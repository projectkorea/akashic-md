async function calc(a, b) {
  document.body.append('before wait');
  const waitTime = await wait();
  document.body.append('after wait');
  waitTime
    .then(() => await add(a, b))
    .then((result) => document.body.append(`The sum is ${result}`));
}
document.body.append(document.createElement('br'));

calc(1, 2);
