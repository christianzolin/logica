var user = require('readline-sync');
var premio = [1000, 5000, 10000, 25000, 50000, 100000, 200000, 300000, 500000, 1000000];
var premioAcumu = 0;
var perguntas = [
    {   pergun: "De quantos anos e constituido um seculo?\n",
        alternativas: "A) 50 \nB) 100 \nC) 1,000 \nD) 1,500 \n",
        res:"b",
        perfull: function () {
            return this.pergun + this.alternativas;            
        }
    },
    {   pergun: "Qual e o coletivo de caes?\n",
        alternativas: "A) Matilha \nB) Rebanho \nC) Cardume \nD) Manada \n" ,
        res: "a",
        perfull: function () {
            return this.pergun + this.alternativas;
        }  
    },
    {   pergun:"Qual e a maior floresta do planeta?\n",
        alternativas:"A) Negra \nB) de Sherwood \nC) da Tijuca \nD) Amazonica \n" ,
        res:"d",
        perfull: function () {
            return this.pergun + this.alternativas;
        }
    },
    {   pergun: "Qual e o naipe do baralho que tem o desenho de coracao?\n",
        alternativas:"A) Ouros \nB) Paus \nC) Copas \nD) Espadas \n",
        res: "c",
        perfull: function () {
            return this.pergun + this.alternativas;
        }
    },
    {   pergun: "Qual atriz estrelou no filme: “A lagoa azul”?\n",
        alternativas: "A) Alicia Silverstone \nB) Brooke Shields \nC) Julia Roberts \nD) Jessica Lange \n" ,
        res:"b",
        perfull: function () {
            return this.pergun + this.alternativas;
        }
    },
    {   pergun: "Qual e o pais do tango?\n",
        alternativas: "A) Uruguai \nB) Argentina \nC) Paraguai \nD) Espanha \n" ,
        res:"b",
        perfull: function () {
            return this.pergun + this.alternativas;
        }
    },
    {   pergun: "Que imperador pos fogo em Roma?",
        alternativas: "A) Trajano \nB) Nero \nC) Brutus \nD) Caligula \n" ,
        res :"b",
        perfull: function () {
            return this.pergun + this.alternativas;
        }
    },
    {   pergun: "O que e um oboe?\n",
        alternativas: "A) Vulcao \nB) Comida \nC) Instrumento Musical \nD) Tribo indigena \n" ,
        res:"c",
        perfull: function () {
            return this.pergun + this.alternativas;
        }
    },
    {   pergun: "Quantos quilates tem o ouro puro?",
        alternativas: "A) 18 \nB) 20 \nC) 24 \nD) 30 \n" ,
        res:"c",
        perfull: function () {
            return this.pergun + this.alternativas;
        }
    },
    
    {   pergun: "Qual oceano tem o maior volume de agua?",
        alternativas: "A) Atlantico \nB) Pacifico\nC) Indico\nD) Artico \n" ,
        res:"b",
        perfull: function () {
            return this.pergun + this.alternativas;
        }
    }
]

var play = true;
var n = 0;
var n2 = 0
var pulo = 3

while(play = true){
    console.log("Comeca agora o jogo de perguntas! ");
    while(n2<10){
        n = Math.floor(Math.random() * 10);
        console.log("Essa pergunta vale "+premio[n2]+" reais");
        var respUsu = user.question("Pergunta: \n "+perguntas[n].perfull()+"Zero para pular");
        if(respUsu == "0" && pulo > 1){
            n = Math.floor(Math.random() * 10);
            var respUsu = user.question("Pergunta: \n "+perguntas[n].perfull()+"Zero");
            pulo--;
        }else {
            console.log("Não pode mais pular")
        }
         if(respUsu != perguntas[n].res){
        console.log("Resposta errada!\n Infelizmente voce perdeu tudo!\n");
             break;
            }
            if(respUsu == perguntas[n].res){
                premioAcumu = premio[n2]
                console.log("Certa resposta! ");}
                if(n2 < 9 && respUsu == perguntas[n].res){
                    var desistir = user.questionInt("Voce deseja desistir?\n 1 - Quero desistir!\n 2 - Quero continuar!\n ");
                    if(desistir == 1){
                        premioAcumu = premioAcumu/2;
                        play = false;
                        console.log("Voce esta saindo com "+premioAcumu+" reais");
                        break;
                    }
                }else{
                    break
                }
                n2++
            }
            
            if(n2==9 && respUsu == perguntas[n].res){
                console.log("--------------------  PARABENS  --------------------\n");
                console.log("----------  VOCE GANHOU UM MILHAO DE REAIS  ----------\n");
                play = false;
            }

            var desistir = user.questionInt("Voce deseja jogar novamente?\n 1 - Quero desistir!\n 2 - Quero continuar!\n ");
            if(desistir == 1){
                play = false;
                break;
            }               
        n2 = 0
                    }
console.log("Jogo encerrado! \n Obrigado por jogar! ");