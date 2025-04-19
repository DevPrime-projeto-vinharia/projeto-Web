function escrever(id, texto) {
    document.getElementById(id).textContent = texto;
  }

  function responderEx1() {
    let varivelIndefinida;
    console.log (varivelIndefinida);

let variavelDefinida = "variável definida";
    console.log (variavelDefinida);
  }

  function responderEx2() {
    // Os operadores !=, == e >= significam respectivamente: Se não igual a, igual a, e maior ou igual a.

let valorExemplo = 10;
if (valorExemplo != 15)
    console.log(`valor igual a ${valorExemplo}, exemplo de !=`);
else
    console.log(`valor não é igual a ${valorExemplo}`)

let valorExemplo2 = 10;
if (valorExemplo2 == 10)
    console.log(`valor igual a ${valorExemplo2}, exemplo de ==`);
else 
    console.log (`valor não é igual a ${valorExemplo2}`);

let valorExemplo3 = 10;
if (valorExemplo3 >= 10)
    console.log(`valor igual a ${valorExemplo3}, exemplo de >=`);
else 
    console.log (`valor não é igual a ${valorExemplo3}`);


  }

  function responderEx3() {
    //parseFloat transforma a string em um número decimal
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    
    let imc = peso / (altura * altura);
    let resultado = "";
    switch (true) {
      case imc < 18.5:
        resultado = "Abaixo do peso";
        break;
      case imc <= 24.9:
        resultado = "Peso ideal";
        break;
      default:
        resultado = "Acima do peso";
    }
    escrever("saida3", `IMC: ${imc}\nSituação: ${resultado}`);
  }

  function responderEx4() {
    var valor;

    for(valor = 0; valor < 51; valor++){
        console.log(`o valor é: ${valor}`);
     }
  }

  function responderEx5() {
    console.log("EXERCICIO 5:")

let usuario = "admin";
let senha = "1234";

let login = prompt("Insira o usuario");
let senhaLogin = prompt("Insira a senha");

if (usuario == login && senha == senhaLogin)
    alert("Login realizado com sucesso!");
else
    alert("Usuário ou senha incorretos, tente novamente!");
  }

  function responderEx6() {
    console.log("EXERCICIO 6:")

let nota1 = 6;
let nota2 = 6;
let nota3 = 6;
let nota4 = 6;
let nota5 = 6;
let nota6 = 6;
let nota7 = 5;

let media = (nota1+nota2+nota3+nota4+nota5+nota6+nota7)/7

if (media >= 6)
    console.log(`Parabéns, você foi aprovado :) com media ${media}`)
else
    console.log(`Infelizmente você foi Reprovado :( com media ${media}`)
  }

  function responderEx7() {
    // Pede o nome
const nome = prompt("Digite seu nome:");
console.log(nome)

// Pede a idade
const idade = prompt("Digite sua idade:");
console.log (idade)


// Pede o curso
const curso = prompt("Digite seu curso:");
console.log (curso)

// Pede o ano
const ano = prompt("Digite o ano atual:");
console.log (ano)

//procura um elemento info no html
/*nao sabia como mandar essa info pro html, pesquisei como fazer. nao entendi muito bem, 
sei que no caso, aqui esta buscando por um elemento no html mas desconhecia esse comando. se tiver um mais facil pf me manda no direct :) ass:561254 */ 
const info = document.getElementById("info");

// Insere os dados no HTML com innerHTML
info.innerHTML = `
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Idade:</strong> ${idade}</p>
    <p><strong>Curso:</strong> ${curso}</p>
    <p><strong>Ano:</strong> ${ano}</p>
`;
  }

  function responderEx8() {
    // BUSCANDO POSIÇÃO DE PALAVRAS E PREPOSIÇÕES

let frase = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas"

// 1) PRIMEIRA POSIÇÃO DE "EM"
let posicaoEm = frase.indexOf("em");
console.log("Primeira posição de 'em':", posicaoEm);

// 2) ÚLTIMA POSIÇÃO DE "IA"
let posicaoIa = frase.lastIndexOf("ia");
console.log("Última posição de 'ia':", posicaoIa);

// 3) POSIÇÃO DA PALAVRA "CIÊNCIA"
let posicaoCiencia = frase.indexOf("ciência");
console.log("Posição da palavra 'Ciência':", posicaoCiencia);

// 4) POSIÇÃO DA PALAVRA "MÉTODOS"
let posicaoMetodos = frase.indexOf("métodos");
console.log("Posição da palavra 'métodos':", posicaoMetodos);
  }

  function responderEx9() {
    //RESOLVENDO EXERCICIO 9

//declarando variavel como string
var numeroString = "1704.25"

//transformando string em float
numeroString  = parseFloat(numeroString)

//apresentando o tipo da variavel
console.log ("Esse é o tipo da sua variavel depois da conversão:", typeof numeroString);
  } 
