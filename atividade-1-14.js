//Faça um programa para ler dois números inteiros A e B e informar se A é divisível por B.

var user = require('readline-sync');

var numa = user.questionInt('Insira um numero: ')

var numb = user.questionInt('Insira um numero: ')

if(numa % numb == 0){
    console.log("numero divisível")
  }else{
    console.log("numero nao é divisivel")
  }