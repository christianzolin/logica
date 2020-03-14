// Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e também seu autor
// Utilize a API : https://breaking-bad-quotes.herokuapp.com/v1/quotes
const axios = require ('axios').default

axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then( bad => { console.log(bad.data[0].quote)
                     console.log(bad.data[0].author)})