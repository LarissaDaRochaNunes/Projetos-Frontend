function adicionarTarefa() {

    //recebe valor do input do usuário
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

    //Se o usuário não digitar nada
    if (tarefa == ""){
        let mensagemErro = "Erro: Digite uma  tarefa para adiciona-lá  a sua lista!"
        mensagem.textContent = mensagemErro
        mensagem.style.color = "#a34743"
    }else{
        //cria novo item (li) e insere na (lista ul)
        const listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)

        //mensagem de tarefa adicionada com sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        mensagem.style.color = "#28a745"
    }

    //limpa o input do usuário
    inputTarefa.value = ""
}