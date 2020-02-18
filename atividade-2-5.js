/*Faça um programa que calcule e imprima o valor em reais de cada kw, o valor em reais a ser pago o novo valor a ser pago por essa residência com um desconto de 10%. Dado: 100 kilowatts custa 1/7 do salario minimo. quantidade de kw gasto por residência.
*/

var user = require('readline-sync');

var kw = user.question("Quantos kilowatts foram gastos esse mes? ");
var valorkw = 1.039/7;

valgasto = valorkw*kw;
valdesconto = valgasto - (valgasto/100)*10
valfinal = valgasto-valdesconto

if(valfinal > 0){
    console.log("O valor a ser pago esse mes e: " + valfinal);
}else if(valfinal < 0){
    console.log("O valor não pode ser computado!");
}else{
    console.log("Dados incorretos");
}