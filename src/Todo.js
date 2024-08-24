document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

        const listItem = document.createElement('li');
        listItem.className = 'todo-item flex  mt-4 rounded-2xl shadow-lg border-2 p-2 cursor-pointer';
        
        const taskCheck = document.createElement('img');
        taskCheck.src = 'public/unchecked.png';
        taskCheck.textContent = 'Unchecked';
        taskCheck.className = 'unchecked h-8';
        taskCheck.onclick = function(){
            taskText.style.textDecoration = 'line-through';
            taskText.style.color= 'gray';
            listItem.removeChild(deleteBtn);
            taskCheck.src = 'public/checkmark.png'
        }

        const taskText = document.createElement('p');
        taskText.className = 'p-1';
        taskText.textContent = todoInput.value;
        taskText.style.paddingLeft = '1rem';


        const deleteBtn = document.createElement('img');
        deleteBtn.src = 'public/delete.png';
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn h-6 mr-0 mt-1 hover:h-7 hover:mt-0 ml-auto';
        deleteBtn.onclick = function() {
            todoList.removeChild(listItem);
            
            
        };

        listItem.appendChild(taskCheck);
        listItem.appendChild(taskText);
        listItem.appendChild(deleteBtn);
        todoList.appendChild(listItem);

        todoInput.value = '';
    
}
