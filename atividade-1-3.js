var user = require('readline-sync');

var senha = user.question("Por favor insira uma senha: ");


if( senha != 1234){
console.log("Voce não tem acesso ao sistema")
} else {
    console.log("ACESSO PERMITIDO")
}