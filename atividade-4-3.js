// Escreva um programa javascript para escrever o seguinte padrão na tela, com N linhas:

// *  
// * *  
// * * *  
// * * * *  
// * * * * *
var user = require('readline-sync');
var z = "*"
var num = user.questionInt("Insira um numero: ")
    while(num<=0){
        var num = user.questionInt("Insira um numero: ")
        
    }

for(var x = 0;x<num;x++){

console.log(z)
z = z + "*"
}

