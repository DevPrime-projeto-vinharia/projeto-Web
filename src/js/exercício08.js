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