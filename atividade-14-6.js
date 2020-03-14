
const axios = require ('axios').default
const user = require ('readline-sync')

var conta = user.question('Insira qual o calculo que deseja realizar: ')

axios.get(`https://newton.now.sh/simplify/${conta}`)
.then( resposta => { console.log(`O resultado é : ${resposta.data.result}`)
})
