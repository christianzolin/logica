// Crie um algoritmo que conte quantos carros do Japan (Japão) existem na base cars.json

// O campo que define o país no cars.json é Origin
// A comparação da string pode ser utilizada usando a palavra “Japan”


var user = require('readline-sync')
var fs = require('fs')
var json = fs.readFileSync("./cars.json")
var carros = JSON.parse(json)
var x = 0

carrosJapao = carros.filter((carro)=>{
    if(carro.Origin === "Japan"){
        x++;
    }
})

console.log(`Existem ${x} carros do Japao`)
