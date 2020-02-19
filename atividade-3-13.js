/*Fazer um algoritmo que receba 5 números e mostra o produto dos ímpares e a soma dos pares
EX: valores fornecidos 1,2,3,4,5
Impares -> 1 * 3  * 5 = 15
Pares -> 2 = 4 = 6
O programa imprime : 
Produtos dos impares : 15
Soma dos pares : 6
*/
var user = require('readline-sync');
var x = 0;
var soma = 0
var mul = 1

while(x < 5){
    var num = user.questionInt("Insira um numero: ")
    if(num % 2 == 0){
        soma = soma + num;
        x++;
    }else{
    mul = mul * num;
    x++;}
} 
if(mul != 1 || num == 1) {
    console.log ( "produto dos impares " + mul)
}else{
    console.log("Não foi digitado numeros impares")
}

if(soma != 0){
 console.log ( "Soma dos pares " + soma)
}else{
    console.log("Não foi digitado numeros pares")
}