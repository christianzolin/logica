/*Faça um programa que pergunte ao usuário escolher duas opções A e B. 
A encerra o programa, B é pra fazer uma soma.
Se o usuário inserir A o programa fecha
Se o usuário inserir B o programa vai realizar uma operação de soma, solicitando dois números inteiros (n1 e n2) onde após o usuário inserir o segundo número o algoritmo deve apresentar a soma e também pergunta se quer realizar outro cálculo.
Se o usuário inserir qualquer coisa diferente de A ou B o programa deve dizer que não entendeu o comando e solicitar novamente para inserir A ou B
*/

var user = require('readline-sync');

var ent = user.question("Insira A para fechar ou B para realizar uma soma");
while(true){
if(ent == "a" || ent == "A"){
    console.log("Encerrar programa")
    break;
}
else if(ent == "b" || ent == "B"){
    var n1 = user.questionInt("Digite um numero: ")
    var n2 = user.questionInt("Digite outro numero: ")
    var soma = n1 + n2;
    console.log("O resultado da sua soma é: " + soma)
    var ent = user.question("Insira A para fechar ou B para realizar outra soma: ")
        
}else{
    console.log("dados incorretos")
    break;
}
} 
