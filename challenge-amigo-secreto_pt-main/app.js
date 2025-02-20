let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let amigo_atual = input.value.trim();
    
    if (amigo_atual !== '') {
        amigos.push(amigo_atual);
        input.value = '';
        mostra_amigos();
    } else {
        alert("Por favor, insira um nome.");
    }
}

function mostra_amigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpa a lista antes de adicionar novos elementos
    
    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}


function sortearAmigo(){
    let escolhido = Math.floor((Math.random()*amigos.length));
    let amigo_escolhido = amigos[escolhido];
    mostra_resultado(amigo_escolhido)
}

function mostra_resultado(amigo_escolhido){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ""

    resultado.textContent = amigo_escolhido;
}