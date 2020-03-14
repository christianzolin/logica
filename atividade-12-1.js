// Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
// Para isso : 
// Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e inicialize as propriedades com estes valores. 
// Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e cor. 
// Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo e cor. 
// Ao final o algoritmo deve comparar se os carro são iguais.
// Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor. 
var user = require('readline-sync')

class Carro{
    constructor(nome,modelo,cor){
        this.nome = nome
        this.modelo = modelo
        this.cor = cor
        }
}

var carro = []

function cadastroCarros(){
    for (var x = 0; x < 2;x++){
        var nome = user.question('Insira o nome do carro: ')
        var modelo = user.question('Insira o modelo do carro: ')
        var cor = user.question('Insira a cor do carro: \n')
        carro.push(new Carro(nome,modelo,cor))
    }
}
cadastroCarros()


if(carro[0].nome == carro[1].nome && carro[0].modelo == carro[1].modelo){
        console.log(`Os carros sao iguais`)
    }else{
    console.log(`Os carros sao diferentes`)
}

console.log(carro)
