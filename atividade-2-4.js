/*Uma empresa abriu uma linha de crédito para os funcionários.
 O valor da prestação não pode ultrapassar 30% do salário. 

Faça um programa que receba o salário, o valor do empréstimo e o número de prestações e informe se o empréstimo pode ser concedido. Nenhum dos valores informados pode ser zero ou negativo.
*/
var user = require('readline-sync');

var salario = user.question("Insira o seu salario: ")
var emprestimo = user.question("Insira o valor do seu emprestimo: ")
var parcela = user.question("Insira a quantidade de parcelas: ")
var total = emprestimo / parcela

if(parcela <=0 || parcela == 1){
  console.log("Empréstimo não pode ser pago a vista")
}
else if(total <= (salario/100)*30){
  console.log("emprestimo concedido")
}else{
  console.log("empretimo negado")
}