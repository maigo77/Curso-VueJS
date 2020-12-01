export default {
  data(){
    return{
      fruta: '',
      frutas: ['Banana', 'Maca', 'Laranja']
    }
  },
  methods: {
    add(){
      this.frutas.push(this.fruta)
      this.fruta = ''
    }
  }
}