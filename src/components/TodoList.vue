<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow">
        {{ todoItem }}
        <span
          class="removeBtn"
          type="button"
          @click="removeTodo(todoItem, index)"
        >
          <i class="far fa-trash-alt alra-hidden"></i>
        </span>
      </li>
    </transition-group>
  </section>
</template>
<script>
export default {
  props: ['propsdata'],
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    removeTodo(todoItem, index) {
      this.$emit('removeTodo', todoItem, index);
    },
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0px;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background-color: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.list-enter-active,
.list-leave-active {
  transition: all 500ms ease-out;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
