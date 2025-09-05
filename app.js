let amigos = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value;
    if (nome) {
        amigos.push(nome);
        nomeInput.value = '';
        atualizarLista();
} else {
        alert('Por favor, insira um nome.'); 
    } 
}
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    // Verifica se há amigos suficientes para o sorteio
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return; // Para a execução da função
    }

    // Sorteia um índice aleatório do array
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    
    // Pega o elemento onde o resultado será exibido
    const resultadoDiv = document.getElementById('resultadoSorteio');
    resultadoDiv.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;

    // Opcional: Limpa a lista de amigos na tela após o sorteio
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
}

// --- A PARTE MAIS IMPORTANTE: Conectando os botões às funções ---
// Isso deve ser feito fora das funções.

// Seleciona os botões do HTML
const botaoAdicionar = document.getElementById('botao-adicionar');
const botaoSortear = document.getElementById('botao-sortear');

// Adiciona os "ouvintes de evento"
botaoAdicionar.addEventListener('click', adicionarAmigo);
botaoSortear.addEventListener('click', sortearAmigo);