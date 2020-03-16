// Faça um algoritmo que calcule a média de potência dos carros da Europe (Europa)
// Similar a atividade 2 porém usaremos o campo Origin para selecionar os carros da europa e depois disso aplicar a média 
// em cima do campo Horsepower.

var user = require('readline-sync')
var fs = require('fs')
var json = fs.readFileSync("./cars.json")
var carros = JSON.parse(json)
var media = 0
var x = 0


mediaHorsepower = carros.filter((carro)=>{
    if(carro.Origin === "Europe"){
        x++;
        media = media + carro.Horsepower
    }
}
)
media = media / x

console.log('a media de potencia dos carros da Europe : ' + media)
