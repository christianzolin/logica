var user = require('readline-sync');

var numcerto = 22;
var resp = user.questionInt("Insira um numero: ")

while(true){
    console.log("Errooou mizeravi, tente de novo")
    resp = user.questionInt("Insira um numero: ");
    
    if(resp == numcerto){
    console.log("ACERTOOOU")
    break;}
}
