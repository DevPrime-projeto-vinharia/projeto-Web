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