var user = require('readline-sync');
var num = user.question("Qual o seu numero: ");

var x = 0
if(num % 2 != 0){
    num = num -1;
}

while(x <= num){
  if(num % 2== 0){
  console.log(x)
  x = x+2;
 }
  else{
    x = x +1;

  }
}
