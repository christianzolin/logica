// Faça um algoritmo que receba uma entrada do usuário e caso encontre a letra a transforme ela em maiúscula
// EX: abelha
// O algoritmo imprime
// AbelhA

// Dicas para esta atividade.
// Para selecionar 1 caracter da string utilizamos a função charAt : 
// var nome = “oi”
// console.log(nome.charAt(0))
// console.log(nome.charAt(1))
// O algoritmo imprime: 
// > o
// > i

var user = require('readline-sync');
var palavra = user.question("Digite aqui uma palavra!\n>>  ");
var tamanho = palavra.length;

for(var i=0; i<tamanho;i++){
    if(palavra.charAt(i) === "a"){
        console.log("> A");
    }else{
    console.log("> "+palavra.charAt(i));
    }
}