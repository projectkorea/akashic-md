<template>
  <div class="inputBox shadow">
    <!-- <button v-on:click="printThis">this from input</button> -->
    <input
      type="text"
      v-model="newTodoItem"
      placeholder="할 일을 입력하세요"
      @keyup.enter="addTodo"
    />
    <span class="addContainer" v-on:click="addTodo"
      ><i class="addBtn fas fa-plus aria-hidden"></i>
    </span>
    <Modal :showProp="showModal" @close="showModal = false">
      <template v-slot:header>
        <h3>경고</h3>
      </template>
      <template v-slot:body>
        <h4>아무것도 입력하지 않았습니다.</h4>
      </template>
    </Modal>
  </div>
</template>
<script>
import Modal from './common/Modal.vue';
export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        var value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit('addTodo', value);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
    printThis() {
      console.dir(this);
    },
  },
  components: {
    Modal,
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
