const start = new Promise((resolve) =>
  setTimeout(() => {
    console.log('start!!!');
    resolve('start');
  }, 2000)
);

const a = (value) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`from ${value} to a`);
      resolve('a');
    }, 1500)
  );
};

const b = (value) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`from ${value} to b`);
      resolve('b');
    }, 1000)
  );
};

const c = (value) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`from ${value} to c`);
      resolve('c');
    }, 1000)
  );
};

start
  .then(a) //
  .then(b)
  .then((value) => c(value))
  .finally((data) => console.log(data || 'end!!!', 'from finally'));
