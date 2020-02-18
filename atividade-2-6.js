/*Elabore um algoritmo que calcule o que deve ser pago por um produto, solicitando o preço da etiqueta do produto e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado. Código Condição de pagamento 
	- 1 À vista em dinheiro ou cheque, recebe 10% de desconto 
	- 2 À vista no cartão de crédito, recebe 15% de desconto 
	- 3 Em duas vezes, preço normal de etiqueta sem juros 
	- 4 Em duas vezes, preço normal de etiqueta mais juros de 10% */

var user = require('readline-sync');

var produto = user.questionInt("Qual o valor do produto? ");
console.log("Qual a forma de pagamento?  1 - A vista cheque ou dinheiro | 2 - A vista cartao de credito | 3-Em 2 vezes | 4-Em 3 vezes")
var formpaga = user.question();
var val1 = produto - (produto/100)*10;
var val2 = produto - (produto/100)*15;
var val3 = produto/2;
var val4 = (produto + (produto/100)*10)/3;

if(formpaga == 1){
    console.log("O valor a ser pago e: " + val1);
}else if(formpaga == 2){
    console.log("O valor a ser pago e: " + val2);
}else if(formpaga == 3){
    console.log("O valor da parcela e: " + val3);
}else if(formpaga == 4){
    console.log("O valor da parcela é: " + val4);
}else if(produto < 0){
    console.log("Valor do produto errado!");
}else{
    console.log("Dados Errados");
}