// Faça um algoritmo em que o usuário possa cadastrar preços de produtos e no final exiba o preço de cada produto junto com o valor total.
//  após inserir todos os produtos o programa deve pedir o valor a ser pago, caso o valor passe do da compra exibir o troco, 
//  se o valor for menor informar que a compra vai ser cancelada. 

// EX entradas :
// 0.75
// 0.25
// 2.50 
// Valor total pago: 5.00

// O programa imprime : 
// Produto 1 - 0.75
// Produto 2 - 0.25
// Produtos 3 - 2.50
// Total da compra : 3.50 $
// Troco : 1.50 $

var user = require('readline-sync')
var produto = []
var total = 0
var troco = 0

while(true){
    var valor = user.questionFloat("Insira o valor do produto: ")
    produto.push(valor)
    total = total + valor
    var validar = user.question("Deseja cadastras outro produto \n 1) Sim ou 2) Nao \n")
    if(validar == "2"){
        break
    }
}
var pago = user.question("Insira o valor a ser pago: ")
for(var x = 0; x < produto.length;x++){
    console.log(`produto ${x+1}: ${produto[x]}`)
}
console.log("Valor total a ser pago: "+pago)
if(pago>total){
    var troco = pago - total
    console.log("O seu troco é :" + troco)
}else{
    console.log("Saldo insuficiente, Sua compra vai ser cancelada.")
}
