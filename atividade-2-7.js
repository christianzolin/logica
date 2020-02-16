var user = require('readline-sync');

var senhacolocada = user.question("Por favor insira uma senha: ");
senha = "batatafrita";

if( senha == senhacolocada){
console.log("ACESSO PERMITIDO")
} else {
    console.log("Voce não tem acesso ao sistema")
}