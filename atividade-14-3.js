// Faça um algoritmo que receba um número de um episódio de Breaking Bad.
// Após isso o algoritmo deve imprimir o elenco de personagens e também de qual temporada é este episódio.
// Caso o episódio seja inválido dizer ao usuário que não existe este episódio.
// Utilize a api : https://www.breakingbadapi.com/api/episodes/{NUMERO_DO_EPISODIO}
// Exemplo episodio 10 : https://www.breakingbadapi.com/api/episodes/10

const axios = require ('axios').default
const user = require ('readline-sync')
var episodio = user.questionInt('Insira o numero do episodio: ')

function episodes(){
axios.get(`https://www.breakingbadapi.com/api/episodes/${episodio}`)
    .then( bad => {
        console.log('temporada:' + bad.data[0].season)
        console.log('elenco: ')
        console.log(bad.data[0].characters)
    })

    .catch((error) => {console.log(error)}

    )
}

episodes()