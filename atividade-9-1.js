// Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume (v = 4/3.pi.R3).
// Então solicite ao usuário o raio e a esfera e utilize a função para exibir o resultado.
var user = require('readline-sync')
var pi = 3.14
var r = user.questionFloat("Insira o valor do raio: ")
function volume(r) {
    var conta = (4/3) * pi * (r**3)   
    return conta

}   
console.log(volume(r))