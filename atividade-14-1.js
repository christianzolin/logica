// Solicite ao usuário para inserir yes ou no
// Após isso utilize a API https://yesno.wtf/api
// Esta api traz um dado aleatório yes ou no 
// No final imprima se o usuário acertou ou não

const axios = require ('axios').default
var user = require('readline-sync')

var txt = user.question('Insira "yes" ou "no" \n ')

axios.get('https://yesno.wtf/api')
    .then(resposta => {
            var y = resposta.data.answer;
            if(txt === y )    {
                console.log('acertou')
            }else{
                console.log('errou')
            }
        
    })

    .catch((error) => {console.log(error)}

    )

    



// if(x === txt){
//     console.log ('voce acertou')
// }
// else{
//     console.log('resposta errada')
// }