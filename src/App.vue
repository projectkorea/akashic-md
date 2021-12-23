<template>
  <div>
    <div id="app">
      <!-- <button v-on:click="fromApp">this from App</button> -->
      <TodoHeader></TodoHeader>
      <TodoInput v-on:addTodo="addTodo"></TodoInput>
      <TodoList v-bind:propsdata="todoItems"></TodoList>
      <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter,
  },
  data() {
    return {
      todoItems: [],
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods: {
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
    fromApp() {
      console.dir(this);
    },
  },
};
</script>
<style>
body {
  text-align: center;
  background-color: #f6f6f8;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-radius: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.05);
}
</style>
