const BASE_API = 'https://api-carnedecasa.herokuapp.com/api'
const axios = require('axios')





export default {

    
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        const json = await req.json({token})
        return json
    },

    signIn: async (cpfcnpj) => {

       
       /*  (async () => {
            const rawResponse = await axios(`${BASE_API}/login`, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              data: JSON.stringify({cpfcnpj: "15060655709"})
            }).then(function(response) {
                console.log(response.data);
                
                var userData = response.data
                var isUser = userData[0].cpfcnpj
               
                console.log(isUser)
                
             
            })
                
               
            
          })();
        
    
 */
   
        
        
},

    signUp: async () => {
        const req = await fetch(`${BASE_API}/user`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({cpfcpnj})
        })
        const json = await req.json()
        return json
    }
}

