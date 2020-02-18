/* Tendo como entrada a altura e o sexo codificado da seguinte forma: 
	Valor 1 para feminino
	 Valor 2 para masculino
de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes 
Fórmulas: 
- para homens: (72.7 * Altura) – 58 
- para mulheres: (62.1 * Altura) – 44.7 
*/  
var user = require('readline-sync');

console.log("Informe o seu sexo: Digite 1 para masculino ou digite 2 para Feminino:")
var sexo = user.question();
if(sexo != 1 && sexo != 2){
    console.log("ERROR4 = informe digitando 1 ou 2");
} 

var altura = user.question("Agora digite sua altura em metros: ")
if(sexo == 1){
var peso = ((72.7 * altura) - 58);
console.log("Seu peso ideal é: " + peso);
}
if(sexo == 2){
var peso = ((62.1 * altura) - 44.7);
console.log("Seu peso ideal é "+ peso);
}