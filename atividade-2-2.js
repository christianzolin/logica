/* function toCelsius(fahrenheit) {
  return (5/9) * (f-32);
}
*/

var user = require('readline-sync');

var medida = user.question("Qual a medida que esta sendo usada? 1-Celsius 2-Fahrenheit ");
var graus = user.question("Quantos graus? ");
var cel = (graus - 32) * 5/9;
var fa = (graus*9/5) + 32; 

if(medida == 1){
    console.log("O valor em Fahrenheit e: " + fa);
}else if(medida == 2){
    console.log("O valor em Celsius e: " + cel);
}else{
    console.log("Dados incompativeis");
}

