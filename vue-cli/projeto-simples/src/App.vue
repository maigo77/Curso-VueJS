<template>
  <div id="app"> 
    {{ titulo }}
    <button @click="titulo += '#'"> Alterar </button>
  </div>
</template>

<script>
   
  export default {
    data: () => {
      return {
        titulo: 'Ola Vue!!!'
      }
    }
  }
</script>

<style>
  #app{
    background: chocolate;
    color: #FFF
  }
</style>