var user = require("readline-sync")

var nota1,nota2,nota3;


var nota1 = user.questionInt("Insira a primeira nota: ");
var nota2 = user.questionInt("Insira a segunda nota: ");
var nota3 = user.questionInt("Insira a terceira nota: ");

 
var media = (nota1 + nota2 + nota3) / 3;

if(media >=7 ){
    console.log("Aprovado")
    console.log("Sua média é: " + media);
} else {
    console.log("Reprovado");
}


