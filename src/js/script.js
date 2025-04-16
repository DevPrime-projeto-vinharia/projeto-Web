// Exercicio 01

let varivelIndefinida;
    console.log (varivelIndefinida);

let variavelDefinida = "variável definida";
    console.log (variavelDefinida);

// Exercicio 2

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

var valor;

for(valor = 0; valor < 51; valor++){
    console.log(`o valor é: ${valor}`);
}