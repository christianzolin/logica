// Faça uma função que recebe um número e devolve seu valor absoluto. 
// No final peça um número para o usuário e exiba o valor absoluto.
var user = require ("readline-sync")
function num_absoluto() {
    var absoluto = Math.abs(num)
    return absoluto
}
var num = user.questionInt("Insira um numero: ")
console.log(num_absoluto())