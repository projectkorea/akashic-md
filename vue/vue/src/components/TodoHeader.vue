<template>
  <header><h1>Vue로 구현하는 Todo</h1></header>
  <div>
    <!-- <button v-on:click="fromHeader">this from header</button> -->
  </div>
</template>
<script>
export default {
  methods: {
    fromHeader() {
      console.dir(this);
    },
  },
};
</script>
<style scoped>
h1 {
  color: rgba(0, 0, 0, 0.5);
  font-size: 42px;
  font-weight: bold;
}
</style>
