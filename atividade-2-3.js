var user = require('readline-sync');

var ddi = user.question("Insira o seu DDI: ")


var num = ["Estados Unidos","Alemanha","Argentina", 
"Brasil","Portugal"];

if(ddi == 1){
  console.log("DDI informado: " + num[0])
}
else if (ddi == 49){
  console.log("DDI informado: " + num[1])
} 
else if (ddi == 54) {
  console.log("DDI informado: " + num[2])
}
else if (ddi == 55){
  console.log("DDI informado: " + num[3])
}
else if(ddi == 35){
  console.log("DDI informado: " + num[4])
}else{
  console.log("DDI não esta cadastrado")
}