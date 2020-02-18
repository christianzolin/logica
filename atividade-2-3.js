/*Fazer um programa que leia um valor de DDI e informe o nome do país Correspondente ao DDI. Por exemplo: 
Se lê 1 imprime "Estados Unidos", 
Se lê 49 imprime "Alemanha",
Se lê 54 imprime "Argentina",
Se lê 55 imprime "Brasil",
Se lê 35 imprime "Portugal". 

Deve também imprimir uma mensagem caso o DDI não esteja cadastrado.*/

var user = require('readline-sync');

var ddi = user.question("Insira o seu DDI: ")


var num = ["Estados Unidos","Alemanha","Argentina", 
"Brasil","Portugal"];

if(ddi == 1){
  console.log("DDI informado: " + num[0])
}
else if (ddi == 49){
  console.log("DDI informado: " + num[1])
} 
else if (ddi == 54) {
  console.log("DDI informado: " + num[2])
}
else if (ddi == 55){
  console.log("DDI informado: " + num[3])
}
else if(ddi == 35){
  console.log("DDI informado: " + num[4])
}else{
  console.log("DDI não esta cadastrado")
}