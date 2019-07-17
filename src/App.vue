<template>
  <div id="app">
    <div class="container">
      <AddTodos></AddTodos>
      <Todos/>
    </div>
  </div>
</template>

<script> 
import Todos from './components/Todos.vue'
import AddTodos from './components/AddTodos.vue'

export default{
  name: 'app',
  components: {
    Todos,
    AddTodos
  }
}

</script>

<style scoped lang="css">
#app{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: grey;

}
.container{
  max-width: 1100px;
  background:white;
  margin:auto;
  overflow:auto;
  padding: 0 2rem;
}

</style>
