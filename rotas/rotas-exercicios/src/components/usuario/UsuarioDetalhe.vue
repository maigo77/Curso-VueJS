<template>
  <div class="usuario-detalhe">
    <h3>Usuario Detalhe</h3>
    <p><strong>Codigo:</strong> {{ id }}  </p>
    <router-link tag="button" primario :to="{ name: 'editarUsuario', params: { id }, query: { completo: false, lingua: 'en' }, hash: '#rodape' }"> <!-- :to="`/usuario/${id}/editar`" -->
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    // console.log("dentro do componente -> usuario detalhe")
    // next(vm => {
    //   console.log(vm.id)
    // })
    const autenticado = true
    autenticado ? next() : next(false)
  }
  // data(){
  //   return{
  //     id: this.$route.params.id 
  //   }
  // },
  // watch: {
  //   $route(to, from){
  //     // to - $route novo
  //     // from - $route antigo
  //     this.id = to.params.id
  //   }  
  // },
}
</script>

<style>

</style>