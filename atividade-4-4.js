// Escreva um programa que calcule a soma de todos os múltiplos de 3 e de 5 entre 1 e 1000
var num1 = 1
var num2 = 1000
var soma = 0
var soma1 = 0
while(num1<=num2){
    if(num1%3==0 ){
soma = soma+ num1
    }
if(num1%5==0){
    soma1 = soma1 + num1
}
num1++
}
console.log("A soma dos numeros multiplos de 3: "+soma)
console.log("A soma dos numeros multiplos de 5: "+soma1)