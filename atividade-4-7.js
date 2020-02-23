// Escreva um programa que apresente quatro opções: 
// 	(a) consulta saldo, (b) saque e (c) depósito e (d) sair. 
// O saldo deve iniciar em R$ 0,00. 
// A cada saque ou depósito o valor do saldo deve ser atualizado. 

var user = require('readline-sync')
var saldo = 0
var saque = 0
var deposito = 0

console.log("Banco Central")
while(true){
    var num = user.question("(A) CONSULTA DE SALDO \n(B) SAQUE \n(C) DEPOSITO \n(D) SAIR\n")
   
    if(num == "A" || num == "a"){
        console.log("Seu saldo é: "+saldo)
    }
    if(num == "B" || num =="b"){
        saque = user.questionInt("Quanto deseja sacar: ")
        if(saldo > saque){
        saldo = saldo - saque;
        }
        if(saque > saldo){
            console.log("Saldo insuficiente")
        }
    }
    if(num == "C" || num == "c"){
        deposito = user.questionInt("Quanto deseja depositar: ")
        saldo = saldo + deposito
    }
    if(num == "D" || num == "d"){
        break
    }
    

    }
