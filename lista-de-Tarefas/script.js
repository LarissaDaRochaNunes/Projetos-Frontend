let tarefas = []

function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()
    const mensagem = document.getElementById("mensagem")

    if (tarefa == "") {
        let mensagemErro = "Erro: Digite uma tarefa para adicioná-la à sua lista!"
        mensagem.textContent = mensagemErro
        mensagem.style.color = "#a34743"
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        mensagem.style.color = "#28a745"

        tarefas.push(tarefa)
        renderizarTarefas()
    }

    inputTarefa.value = ""
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas")
    const botaoLimpar = document.getElementById("botaoLimpar")
    listaTarefas.innerHTML = ""

    if (tarefas.length > 0) {
        botaoLimpar.style.display = "inline-block" 
    } else {
        botaoLimpar.style.display = "none" 
    }

    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]

        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa)
    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Tarefa removida com sucesso!"
    mensagem.style.color = "#a34743"
}

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite a tarefa: ", tarefas[i])
    if (tarefaEditada && tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada.trim()
        renderizarTarefas()
        const mensagem = document.getElementById("mensagem")
        mensagem.textContent = "Tarefa editada com sucesso!"
        mensagem.style.color = "#28a745"
    }
}

function limparLista() {
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso!"
    mensagem.style.color = "#a34743"
}