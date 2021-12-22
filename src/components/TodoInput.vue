<template>
  <div>
    <div>
      <input type="text" v-model="newTodoItem" />
      <button>추가</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTodoItem: '',
    };
  },
};
</script>
<style></style>
