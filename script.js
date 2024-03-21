let tasks = [];

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText !== '') {
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        };
        tasks.push(task);
        input.value = '';
        renderTasks();
    }
}


function renderTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';

    tasks.forEach(task => {
        const item = document.createElement('li');
        item.textContent = task.text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => deleteTask(task.id);


        item.appendChild(deleteButton);
        list.appendChild(item);
    });
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}

const taskInput = document.getElementById('taskInput');

taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});