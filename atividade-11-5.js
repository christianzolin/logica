var ageCalculator = require('age-calculator');
  var {AgeFromDateString, AgeFromDate} = require('age-calculator');
  var user = require('readline-sync')
  var ano = user.questionInt('Insira o seu ano de nascimento: ')
  var mes = user.questionInt('Insira o seu mes de nascimento: ')
  var dia = user.questionInt('Insira o seu dia de nascimento: ')

 mes = mes - 1 // no caso o modulo, janeiro começa no zero
  var calc_idade = new AgeFromDate(new Date(ano, mes, dia)).age;
  console.log(`A sua idade é ${calc_idade}`) 