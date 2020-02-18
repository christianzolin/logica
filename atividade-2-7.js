/*Elabore um programa para testar se uma senha digitada é igual a “batatafrita”. Se a senha estiver correta escreva 
	“Acesso permitido”, 
do contrário emita a mensagem 
	“Você não tem acesso ao sistema”.
*/
var user = require('readline-sync');

var senhacolocada = user.question("Por favor insira uma senha: ");
senha = "batatafrita";

if( senha == senhacolocada){
console.log("ACESSO PERMITIDO")
} else {
    console.log("Voce não tem acesso ao sistema")
}