'use strict';
/* teste de numeros */

var numero01 = 100.67;
var numero02 = 40;

// adição: + / subtração: - / divisão: / - / multiplicação *

var adicao = numero01 + numero02
var subtracao = numero01 - numero02
var divisao = numero01 / numero02
var multiplicacao = numero01 * numero02

console.log('adição',adicao)
console.log('subtração',subtracao)
console.log('divisão',divisao)
console.log('multiplicação',multiplicacao)
try{
    nome = '';// com o uso de 'use strict' é obrigado realizar a declaração de váriavel
} catch(err){
    console.log('falha: ', err.message);
} finally{
    console.log('Excecutou bloco');
}


