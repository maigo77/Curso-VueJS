<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do usu�rio: <strong> {{ idade }} </strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from "@/barramento"

export default {
    props: {
        nome: {
            type: String,
            // required: true,
            default: "Anônimo",
            // default: function() {
                //     return Array(10).fill(0).join(',')
            // }
        },
        idade: Number,
        reiniciarFn: Function
    },
    methods: {
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            let nome = 'Pedro'
            this.$emit('nomeMudou', nome)
        }
    },
    created(){
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
