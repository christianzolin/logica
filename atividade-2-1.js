var user = require('readline-sync');

    var produto = user.question("Insira o valor do produto: ")
    var m1 = user.question ("Insira a quantidade de moedas de 1 real: ")
    var m50 = user.question ("Insira a quantidade de moedas de 0.50 centavos: ")
    var m25 = user.question ("Insira a quantidade de moedas de 0.25 centavos: ")
    var m10 = user.question ("Insira a quantidade de moedas de 0.10 centavos: ")
    var m5 = user.question ("Insira a quantidade de moedas de 0.05 centavos: ")
    var m01 = user.question ("Insira a quantidade de moedas de 0.01 centavos: ")

    var moeda = [ 1,0.50, 0.25, 0.10, 0.05, 0.01];
var total = (moeda[0]*m1) + (moeda[1]*m50) + (moeda[2]*m25) + (moeda[3]*m10) + (moeda[4]*m5) + (moeda[5]*m01);

var sobra = total - produto;
 
if(produto > total){
  console.log("Dinheiro insuficientes")
}else if(produto <= total )
{
  console.log("Voce pode comprar este produto e sobrou: " + sobra)
}
else {
  console.log("Dados incompatives")
}