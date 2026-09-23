const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const taskCounter = document.getElementById('taskCounter');

function updateTaskCounter(){
    const activeTasks = taskList.querySelectorAll('.task-item:not(.completed)');
    const count = activeTasks.length;

    if (count === 1){
        taskCounter.textContent = "1 tarefa ativa";
    }else{
        taskCounter.textContent = `${count} tarefas ativas`;
    }
}

function createTaskElement(taskTextText){
    const li = document.createElement("li");
    li.classList.add('task-item');

    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');

    const btnCheck = document.createElement('button');
    btnCheck.classList.add('btn-check');
    btnCheck.type = 'button';

    btnCheck.addEventListener('click', () => {
        li.classList.toggle('completed');
        updateTaskCounter();
    });

    const span = document.createElement('span');
    span.classList.add('task-text');
    span.textContent = taskTextText;

    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btn-delete');
    btnDelete.type = 'button';
    btnDelete.textContent = '✕';

    btnDelete.addEventListener('click', () => {
        li.remove(); 
        updateTaskCounter(); 
    });

    taskContent.appendChild(btnCheck);
    taskContent.appendChild(span);

    li.appendChild(taskContent);
    li.appendChild(btnDelete);

    taskList.appendChild(li);

    updateTaskCounter();

}

taskForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const text = taskInput.value.trim();

    if(text !== ""){
        createTaskElement(text);
        taskInput.value = "";
        taskInput.focus();
    }
});