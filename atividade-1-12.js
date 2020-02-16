var user = require('readline-sync');

var nome = user.question("Insira o seu nome: ")
var sexo = user.question("Insira o sexo [F] ou [M]: ")
var estcivil = user.question("Insira o seu estado civil (Solteiro ou Casado): ")

if(sexo != m || sexo != M && estcivil == casada || estcivil == CASADA){
   var tempo = user.question("Insira o tempo de casada: ") 
   console.log(nome + sexo + estcivil + tempo)
} else if(sexo != m || sexo != M && estcivil == solteira || estcivil == SOLTEIRA){
    console.log(nome + sexo + estcivil)
}

if(sexo != f || sexo != F && estcivil == casado || estcivil == CASADO){
    console.log(nome + sexo + estcivil)
} else if (sexo != f || sexo != F && estcivil == solteiro || estcivil == SOLTERIO)
{
    console.log(nome + sexo + estcivil)
}