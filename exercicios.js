// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------
/* - Exercício 1
    
    Escreva uma função que pede ao usuário a **altura** e a **largura** (nessa ordem) de um retângulo e **imprime no console** a **área** do retângulo. */
// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("Informe a altura:")
  const largura = prompt("Informe a Largura:")
  console.log(altura * largura)

}
/* Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade. */
// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Informe o Ano Atual:")
  const anoDeNascimento = prompt("Informe o Ano de Nascimento:")
  console.log(anoAtual - anoDeNascimento)


}
/* Escreva uma função que recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea). */
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
 return peso / (altura * altura)

}
/* Escreva uma função que pede ao usuário seu nome, sua idade e seu email (nessa ordem), e imprime no console uma mensagem como a seguinte: */
// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
 let nome = prompt("Informe seu nome:")
 let idade = prompt("Informe sua idade:")
 let email = prompt("Informe seu e-mail:")
 console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

 

}
/* Escreva uma função que pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores. */
// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Informe a primeira cor:")
  let cor2 = prompt("Informe a segunda cor:")
  let cor3 = prompt("Informe a terceira cor:")
  const cor = [cor1, cor2, cor3]
  console.log(cor) 

}
/* Escreva uma função que recebe uma string e retorna ela em letra maiúscula. */
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}
/* Escreva uma função que recebe o custo de um espetáculo de teatro e o valor de cada ingresso (considere que todos os ingressos têm o mesmo preço) e retorna quantos ingressos precisam ser vendidos para que o espetáculo não dê prejuízo. */
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso 

}
/* Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas possuem o mesmo tamanho. */
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length===string2.length
  
}
/* Escreva uma função que recebe um array e retorna o primeiro elemento. */
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array.shift()

}
/* Escreva uma função que recebe um array e retorna o último elemento. */
// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array.pop()

}
/* Escreva uma função que recebe um array e retorna um array com o primeiro e o último elemento trocados. */
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const num1 = array.shift() 
  const num2 = array.pop()
  array.unshift(num2)
  array.push(num1)
  return array
}
/* Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas são iguais, desconsiderando letras maiúsculas ou minúsculas. */
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase() 

}
/* Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

- Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
- Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
- Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos */
// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = Number(prompt("Informe o ano Atual:"))
  let anoDeNasc = Number(prompt("Informe o ano de nascimetno:"))
  let anoDeEmiss = Number(prompt("Informe o ano de emissão:"))
  let idade = anoAtual - anoDeNasc
  const menosVinte = idade <= 20 && 
  const entreVinteeCinq =
  const acimaCinq = 
  
  console.log()

}
/* Escreva uma função que recebe um ano e retorna um booleano (true ou false) que indica se o ano é bissexto. Um ano é bissexto de acordo com as seguintes condições:

- **São bissextos** todos os anos múltiplos de 400**.**
- **São bissextos** todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400**.**
- **Não são bissextos** todos os demais anos. */
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  return ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)
}
/* Escreva uma função que faz as seguintes perguntas ao usuário (condições para ser uma pessoa estudante da Labenu):

- Você tem mais de 18 anos?
- Você possui ensino médio completo?
- Você possui disponibilidade exclusiva durante os horários do curso?

O usuário deve responder essas perguntas com `"sim"` ou `"nao"`.

A função deve imprimir no console um booleano (true ou false) que indica se a inscrição para o curso é válida, ou seja, se o usuário pode ou não fazer o curso da Labenu. A inscrição é válida quando todas as respostas para todas as perguntas for positiva. */
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  
  let idade = prompt(`Você tem mais de 18 anos?`)
  let ensino = prompt(`Você possui ensino médio completo?`)
  let disponibilidade = prompt(`Você possui disponibilidade exclusiva durante os horários do curso?`)

console.log(idade === "sim" && ensino === "sim" && disponibilidade ==="sim")
  



}