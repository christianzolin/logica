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