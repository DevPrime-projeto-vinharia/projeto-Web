// Exercicio 01

console.log("EXERCICIO 1:")


let varivelIndefinida;
    console.log (varivelIndefinida);

let variavelDefinida = "variável definida";
    console.log (variavelDefinida);

// Exercicio 2


console.log("EXERCICIO 2:")


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



// EX 3

   
// Exercicio 3
console.log("EXERCICIO 3:")


let peso = 200;
let altura = 1.70;

let imc = peso / (altura * altura);

console.log(`O seu imc é: ${imc}?`);

switch (true) {
    case (imc < 18.5):
        console.log("Abaixo do peso")
        break;

    case (imc > 24.9):
        console.log("Acima do peso")
        break;
    
    case (imc >= 18.5 && imc <= 24.9):
        console.log("Peso ideal")
        break;
    }





// EX 4


console.log("EXERCICIO 4:")


var valor;

for(valor = 0; valor < 51; valor++){
    console.log(`o valor é: ${valor}`);

}



// Exercicio 5
console.log("EXERCICIO 5:")

let usuario = "admin";
let senha = "1234";

let login = prompt("Insira o login");
let senhaLogin = prompt("Insira a senha");

if (usuario == login && senha == senhaLogin)
    console.log("Login realizado com sucesso!");
else
    console.log("Usuário ou senha incorretos, tente novamente!");

// Exercicio 6
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




