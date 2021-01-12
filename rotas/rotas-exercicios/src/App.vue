<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<Menu />
		<router-view name="menu" />
		<transition enter-active-class="animated rubberBand" leave-active-class="animated rollOut" mode="out-in">
			<router-view />
		</transition>
		<router-view name="menuInferior" />
	</div>
</template>

<script>
export default {

}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

<!--
	Hash -> localhost:8080/#/
	History -> localhost:8080/...

	Modo hash -> req -> index.html (referencia para o app.js - VUE), entao no caso quando eh passado uma rota /usuarios por exemplo, nao se faz uma requisicao para o servidor, pois eh interpretado apenas pelo router 
	para fazer a renderizacao

	Modo history -> req (/usuario) o que sera enviado para o servidor eh /usuario (caso a rota nao esteja implementada, nao passara pelo index.html e no caso nao iria renderizar nada)
-->
