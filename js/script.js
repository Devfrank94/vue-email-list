const {createApp} = Vue;


createApp({

  data(){

    return{
      apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail',

      mailList: [],
      mailGenerate: null
    }

  },

  methods: {

    // Funzione che genera e richiama array di mail
    getMails(){
      for(let i = 0; i < 10; i++){

      axios.get(this.apiUrl).then(response => {

        this.mailGenerate = response.data.response;
        console.log(this.mailGenerate)
        this.mailList.push(this.mailGenerate)

      })
    }
    
    console.log(this.mailList)
  }
},

  mounted(){

    this.getMails()

  }


}).mount('#app')