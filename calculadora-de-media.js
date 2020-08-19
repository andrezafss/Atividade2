const input = require("readline-sync")

console.log('== Calculadora de Medias! ==')

const nota1 = input.question("Digite a primeira nota: ")
const nota2 = input.question("Digite a segunda nota: ")
const nota3 = input.question("Digite a terceira nota: ")
const nota4 = input.question("Digite a quarta nota: ")
const nota5 = input.question("Digite a quinta nota: ")
const nota6 = input.question("Digite a sexta nota: ")

const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6))/6
console.log("o valor de media eh: ", media.toFixed(2))

if (media >= 7) {
  console.log("Aprovada!")
} else if (media < 5) {
  console.log("Reprovada!")
} else if(media >= 5 && media < 7) {
  console.log("Recuperacao!")
}