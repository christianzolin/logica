var user = require ("readline-sync");

var num = user.question("Insira um numero: ");

if(num >=100 && num <=200){
    console.log("Voce digitou um numero entre 100 e 200")
}else {
    console.log("Voce digitou um numero fora da faixa entre 100 e 200.")
}