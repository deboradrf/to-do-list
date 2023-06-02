let input = document.getElementById("input")
let botao = document.getElementById("botao-adicionar")

let listaCompleta = document.getElementById("tarefas")

let arrayDeTarefas = []

function mostrarNaTela(){
    let novaLista = ""

    arrayDeTarefas.forEach( tarefa => {
        
        novaLista = novaLista + `
        <li class="item-tarefa">
            <p>${tarefa}<button id='botao-ok'onclick='removerItem("${tarefa}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg></button></p>
        </li>
    `
    })

    listaCompleta.innerHTML = novaLista
}    

function removerItem(data){
    let index = arrayDeTarefas.findIndex(x => x.name == data)
    arrayDeTarefas.splice(index,1)
    mostrarNaTela()
}

function cliqueiNoBotao(){
    arrayDeTarefas.push(input.value)
    
    if(!input.value) {
        alert('Digite algo para inserir na sua lista')
    }
    else {
        mostrarNaTela()
    }
}

botao.addEventListener("click", cliqueiNoBotao )