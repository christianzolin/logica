var user = require("readline-sync");

var ent = user.question("Insira 0 para sair ou qualquer outra tecla para o continuar. \n")

while(ent != 0){
    var ent = user.question("Insira 0 para sair ou qualquer outra tecla para o continuar. \n")    
}
console.log("Programa encerrado")