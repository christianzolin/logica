/*Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos). 
*/

var user = require('readline-sync');

var nome = user.question("Insira o seu nome: ")
var sexo = user.question("Qual o seu sexo? F-Feminino M-Masculino ");
var estadocivil = user.question("Qual o seu estado civil? 1-Casado(a) 2-Solteiro(a)" );
var tempcas;
if(sexo == "F" || sexo == "f"){
        if(estadocivil == 1){
        tempcas = user.question("A quantos anos voce esta casada?");
        console.log(nome + " Voce é casada a " + tempcas + " anos");
    }else{
        console.log(nome + " Sexo feminino e solteira!");
    }
}else if(sexo == "M" || sexo == "m"){
    if(estadocivil == 1){
        tempcas = user.question(nome + " A quantos anos voce é casado?");
        console.log(nome + " Voce e casado a " + tempcas + " anos");
    }else{
        console.log(nome + " Sexo masculino e solteiro");
    }
}else{
    console.log("Dados de entrada incorretos");
}