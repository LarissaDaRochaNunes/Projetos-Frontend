let tarefas = []

function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

    if (tarefa == ""){
        let mensagemErro = "Erro: Digite uma  tarefa para adiciona-lá  a sua lista!"
        mensagem.textContent = mensagemErro
        mensagem.style.color = "#a34743"
    }else{
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        mensagem.style.color = "#28a745"

        tarefas.push(tarefa)
        renderizarTarefas()
    }

    inputTarefa.value = ""
}

function renderizarTarefas(){
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""
    let i = 0
    for (i;i < tarefas.length; i++){
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]
        listaTarefas.appendChild(novaTarefa)
    }

}