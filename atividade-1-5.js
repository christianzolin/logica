function sortfunction(a, b){
    return (a - b)
}    

var user = require('readline-sync');

var um = user.question("Digite primeiro numero: ");
var dois = user.question("Digite segundo numero: ")
var tres = user.question("Digite terceiro numero: ")

var numeros = [um, dois, tres]

console.log(numeros.sort(sortfunction))