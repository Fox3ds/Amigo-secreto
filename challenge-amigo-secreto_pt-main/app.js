//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let numero_amigos=0;
let amigo_atual;




function adicionarAmigo(amigo_atual, numero_amigos, amigos=[]){
    amigo_atual= document.querySelector('input').value;
    
    if(amigo_atual.value !=''){
        alert(amigo_atual);
        numero_amigos++;
        amigos.push(amigo_atual);

        amigo_atual = document.querySelector('input');
        alert(amigo_atual.value);
        
        amigo_atual.value='';
       
    }else{
        alert("Por favor, insira um nome.");
    }
    
    
}

function mostra_amigos(amigos){

}