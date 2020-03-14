// Faça um algoritmo que receba uma CEP e diga qual é o endereço completo (Cidade, rua, estado) deste CEP.
// Utilize a API : https://api.postmon.com.br/v1/cep/{CEP}
// Exemplo CEP :https://api.postmon.com.br/v1/cep/89010020

const axios = require ('axios').default
const user = require ('readline-sync')
var cep = user.question('Insira o numero do cep: ')


axios.get(`https://api.postmon.com.br/v1/cep/${cep}`)
    .then( resposta => { 
        console.log(resposta.data.bairro)
        console.log(resposta.data.cidade)
        console.log(resposta.data.logradouro)
        console.log(resposta.data.estado_info.nome)
    })

    
