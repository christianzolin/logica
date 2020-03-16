// Crie um algoritmo que conte quantos carros da Ford existem no cars.json.

// A resolução é similar ao exercício 1, porém utilize o método “includes” com parâmetros “Ford” na propriedade Car 
// para realizar a contagem.

var user = require('readline-sync')
var fs = require('fs')
var json = fs.readFileSync("./cars.json")
var carros = JSON.parse(json)

var tamanho = carros.length 



var ford = 0

for(var i=0;i<tamanho;i++){
    var x = carros[i].Car 
    var y = x.includes('Ford')
    if ( y === true) {
        ford++
    }
}

console.log(`O total de carros da Ford é ${ford}`)
