<template>
  <div>
    <h3> {{ global }} </h3>
    <ul>
      <li v-for="(fruta, index) in frutas" :key="index">{{ fruta }}</li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add">
  </div>
</template>

<script>
import frutasMixin from "./frutasMixin"
import usuarioMixin from "./usuarioMixin"

export default {
  mixins: [frutasMixin, usuarioMixin],
  created() {
    console.log("created - frutas")
  }
}
</script>

<style>

</style>