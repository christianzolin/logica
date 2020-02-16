var user = require('readline-sync');

var lado1 = user.question("Qual a medida do primeiro lado do seu triangulo? ");
var lado2 = user.question("Qual a medida do segundo lado do seu triangulo? ");
var lado3 = user.question("Qual a medida do terceiro lado do seu triangulo? ");

if(lado1 != lado2 && lado2 != lado3 ){
    console.log("Triangulo Escaleno");
} else if(lado1 != lado2 && lado2 == lado3){
    console.log("Triangulo Isocele")
} else if(lado1 == lado2 && lado2 == lado3){
    console.log("Triangulo Equilatero")

}
