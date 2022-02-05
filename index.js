function test() {
  return {
    rs: 25,
    bar: () => {
      console.log(this.rs);
    },
  };
}
const obj = test.call({ rs: 100 }); // {rs:25, bar:function}
obj.bar(); // 100
