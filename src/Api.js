const BASE_API = 'http://192.168.0.188:3333/api'
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
        const req = await axios(`${BASE_API}/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                cpfcnpj
            }
        }).then( (result) => {
           return result;
        })

        
        
        
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