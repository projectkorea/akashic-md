# todo-app-vue

- 1. vue3 에서는 start-from을 사용할 것

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

<!-- template for the modal component -->
<script type="text/x-template" id="modal-template">
   
</script>

<!-- app -->
<div id="app">
  <button id="show-modal" @click="showModal = true">Show Modal</button>
  <!-- use the modal component, pass in the prop -->
  <transition name="modal">
  <modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <template v-slot:header>
      <h3>custom header</h3>
    </template>
  </modal>
  </transition>
</div>
