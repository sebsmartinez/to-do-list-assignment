document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-todo');
    const todoInput = document.getElementById('new-todo');
    const todoList = document.getElementById('todo-list');
    const dingSound = new Audio('ding.mp3');

    addButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });

    function addTodoItem(text) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            todoItem.classList.toggle('completed');
            if (checkbox.checked) {
                todoItem.style.textDecoration = 'line-through';
                todoList.appendChild(todoItem);  
                dingSound.play(); 
            } else {
                todoItem.style.textDecoration = 'none';
            }
        });

        const todoText = document.createElement('span');
        todoText.classList.add('todo-text');
        todoText.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoItem.classList.add('removed');
            setTimeout(() => {
                todoItem.remove();
            }, 500);
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);
    }
});
