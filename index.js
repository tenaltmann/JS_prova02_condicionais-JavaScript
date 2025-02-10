const nome = prompt("Insira seu nome: ")
const altura_em_cm = prompt("Insira sua altura em centimetros: ")
const altura_em_metros = altura_em_cm / 100
const peso = prompt("Insira seu peso agora")
const formula = (peso / (altura_em_metros ** 2))
const calcula_imc = formula.toFixed(2)

if(calcula_imc >= 40){
    alert(`Olá ${nome}. Seu IMC é ${calcula_imc}, e portanto você se enquadra em OBESIDADE GRAU III `)}
else if (calcula_imc >= 35 && calcula_imc <= 39.99) {
    alert(`Olá ${nome}. Seu IMC é ${calcula_imc}, e portanto você se enquadra em OBESIDADE GRAU II `)}
else if (calcula_imc.toFixed >= 30 && calcula_imc <= 34.99) {
    alert(`Olá ${nome}. Seu IMC é ${calcula_imc}, e portanto você se enquadra em OBESIDADE GRAU I `)}
else if (calcula_imc >= 25 && calcula_imc <= 29.99) {
    alert(`Olá ${nome}. Seu IMC é ${calcula_imc}, e portanto você se enquadra em SOBREPESO `)}
else if (calcula_imc >= 18.50 && calcula_imc <= 24.99) {
    alert(`Olá ${nome}. Seu IMC é ${calcula_imc}, e portanto você se enquadra em PESO NORMAL `)} 
else if (calcula_imc >= 17 && calcula_imc <= 18.49) {
    alert(`Olá ${nome}. Seu IMC é ${calcula_imc}, e portanto você se enquadra em BAIXO PESO `)}
else if (calcula_imc >= 16 && calcula_imc <= 16.99){
    alert(`Olá ${nome}. Seu IMC é ${calcula_imc}, e portanto você se enquadra em BAIXO PESO GRAVE `)} 
else{
    alert(`Olá ${nome}. Seu IMC é ${calcula_imc}, e portanto você se enquadra em BAIXO PESO MUITO GRAVE `)
}

