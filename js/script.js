const {createApp} = Vue;


createApp({

  data(){

    return{
      apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail',

      mails: []
  
    }

  },

  methods: {
    getMails(){

      axios.get(this.apiUrl, {
        params: {
          results: 10
        }
      })
      
      .then(response => {
        this.mails = response.data.response;
        console.log(this.mails);
        
      })

  },

},

  mounted(){

    this.getMails();


  },

}).mount('#app')