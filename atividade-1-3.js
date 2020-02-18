/*Escreva um programa que verifique a validade de uma senha fornecida pelo usuário. 
A senha válida é o número 1234. 
Devem ser impressas as seguintes mensagens: 
- ACESSO PERMITIDO caso a senha seja válida. 
- ACESSO NEGADO caso a senha seja inválida
*/



var user = require('readline-sync');

var senha = user.question("Por favor insira uma senha: ");


if( senha != 1234){
console.log("Voce não tem acesso ao sistema")
} else {
    console.log("ACESSO PERMITIDO")
}