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