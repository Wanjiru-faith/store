<template>
  <div id="app">
    <todo/>
    
  </div>
</template>

<script> 
import Todo from './components/Todos.vue'
export default{
  name: 'app',
  components: {
    Todo
  }
}

</script>

<style scoped lang="css">
body{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: white;

}
.container{
  max-width: 1100px;
  margin:auto;
  overflow:auto;
  padding: 0 2rem;
}

</style>
