// Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada entre
// estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
// procedimento para uma turma composta por cinco alunos, usando o comando For.
// Exemplo de tela de saída:

// Entre com o nome do aluno: João da Silva
// Entre com o grau A: 5.0
// Entre com o grau B: 6.0
// O aluno João da Silva tem uma média:5.7
var user = require('readline-sync')

for(x=0;x<5;x++){
var nome = user.question("Qual o nome do aluno : ")
var nota1 = user.questionInt("Qual e a nota A? ")
var nota2 = user.questionInt("Qual e a nota B? ")
var media

  var nota1 = (nota1/100)*30
  var nota2 = (nota2/100)*70
  media = nota1 + nota2;

  console.log("O aluno "+nome+" tem uma média de :"+media+"\n")
  
}