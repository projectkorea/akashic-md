<template>
  <div class="inputBox shadow">
    <!-- <button v-on:click="printThis">this from input</button> -->
    <input type="text" v-model="newTodoItem" placeholder="할 일을 입력하세요" />
    <span class="addContainer" v-on:click="addTodo"
      ><i class="addBtn fas fa-plus aria-hidden"></i>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTodoItem: '',
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        var value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit('addTodo', value);
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
    printThis() {
      console.dir(this);
    },
  },
};
</script>
<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3em;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: center;
}
</style>
