import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', valor => {
	return valor.split('').reverse().join('')
})

// Raramente sera utilizado
Vue.mixin({
	data(){
		return{
			global: "Eu sou uma variavel global"
		}
	},
	created(){
		console.log("created - mixin global")
	}
})

new Vue({
	render: h => h(App)
}).$mount('#app')
