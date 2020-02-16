var user = require('readline-sync');

var lados = user.question("Quantos lados tem o seu poligono: ");
var cen = user.question("Quantos centimetos tem ? ");

if(lados == 3){
console.log("O seu poligono é um Triângulo e tem "+ 3*cen + " centrimetos de area total");
}else if(lados == 4){
    console("O seu poligono é um Quadrado e tem "+ 4*cen + " centrimetros de area total");
    }
    else if(lados == 5){
        console.log("O seu poligono é um Pentágono e tem "+ 5*cen + " centimetros de area total");
    }
        else{
            console.log("Dados informados incorretamente")
        }

