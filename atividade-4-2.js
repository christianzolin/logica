// Escreva um programa que pedirá para o usuário dois números entre 1 e 100. 
// O programa deve, então, iterar de um em um do menor pro maior,
//  sempre imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7, 
//  o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível por 5, 
//  o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o programa deveria imprimir a 
//  mensagem “Ping Pong”. Dica: Neste exercício vocês talvez precisem fazer uso do recurso
//   “user.questionInt()” que transforma o conteúdo de um input do usuário de string para inteiro.


var user = require ('readline-sync');
var num1 = user.questionInt("Insira um numero entre 1 e 100: ")
var num2 = user.questionInt("Insira um outro numero entre 1 e 100: ")
    while(num1 < 1 || num1 > 100 && num2 < 1 || num2 > 100){
    console.log("Numeros inseridos estão incorretos: ")
    var num1 = user.questionInt("Insira um numero entre 1 e 100: ")
    var num2 = user.questionInt("Insira um outro numero entre 1 e 100: \n")
    }
    while(num1 == num2){
    console.log("Numeros inseridos não podem ser iguais: ")
    var num1 = user.questionInt("Insira um numero entre 1 e 100: ")
    var num2 = user.questionInt("Insira um outro numero entre 1 e 100: \n")
    }       
    while(num1 <= num2){
    if(num1%7==0 && num1%5==0){
        console.log("PING PONG")
    }
    if(num1%7==0){
    console.log("PING");
    }

    if (num1 %5==0){
        console.log("PONG")
    }else{
        console.log(num1)
    }
    num1++
}
