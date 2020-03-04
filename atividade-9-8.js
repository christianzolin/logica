// Faça uma função que receba um número e retorne se é perfeito ou não.
// Após isso solicite ao usuário para inserir um número e imprimir se é perfeito ou não utilizando a função
//  e imprimindo o resultado no final.
// OBS: Um número perfeito é aquele que a soma do seus divisores (auto excluindo) é igual a ele mesmo
// Exemplo 6 possui os seguintes divisores
// 1 + 2 + 3 = 6
var user = require('readline-sync')

function num_perfeito(num) {
    var soma = 0
    for(var x =1;x<num;x++){
    if(num%x==0){
        soma = soma + x
    }
}
    if(soma == num){
        return "e perfeito"
    }else{
        return "nao e perfeito"
    }
}

var num = user.questionInt("Insira um numero para saber se ele e perfeito: ")
console.log(`O numero inserido ${num_perfeito(num)}`)