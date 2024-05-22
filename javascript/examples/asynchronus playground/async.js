function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function add(a, b) {
  return a + b;
}

async function calc() {
  document.body.append('before wait');

  await wait(2000);

  document.body.append(document.createElement('br'));
  document.body.append('after wait');

  await wait(2000);

  const sum = await add(1, 2);

  document.body.append(document.createElement('br'));
  document.body.append('The sum is ' + sum);
}

calc();
