// (INNER JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso peça 5 números de 1 a 10 para cada jogador. 
// Primeiro para o jogador A e depois para o jogador B. 
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números iguais que o jogador A e B colocaram.
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// 1,2,3 

var user = require('readline-sync')

var user1 = user.question("Player 1: Insira o seu nome: ")
var user1 = user.question("Player 2: Insira o seu nome: ")
var num1 = []
var num2 = []
var numiguais = [] 

while(num1.length < 5){
    var inserido = user.questionInt("Player 1: insira um numero de 1 a 10: ")
    if(inserido>0 && inserido<=10){
        num1.push(inserido)
    }
    else{
        console.log("Insira um numero de 1 a 10")
    }
}

while(num2.length < 5){
    var inserido = user.questionInt("Player 2: insira um numero de 1 a 10: ")
    if(inserido>0 && inserido<=10){
        num2.push(inserido)
    }
    else{
        console.log("Insira um numero de 1 a 10")
    }
}

for(var i=0;i<num1.length;i++){
    for(var x =0;x<num2.length;x++){
        if(num1[i]==num2[x]){
            numiguais.push(num1[i])
        }
    }

}

console.log(numiguais)