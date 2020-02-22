var  user = require ('readline-sync');

var num1 = user.questionInt("Insira um numero entre 1 e 100: ")
var num2 = user.questionInt("Insira um numero entre 1 e 100: ")

//while(num1 >= 1 && num1 <= 100 & num2 >= 1 && num2 <= 100)

  
while(num1 <= num2){
    if(num1%7==0 && num1%5==0){
        console.log("PING PONG")
    }
    if(num1%7==0){
    console.log("PING");
    }

    if (num1 %5==0){
        console.log("PONG")
    }else{
        console.log(num1)
    }
    num1++
}
