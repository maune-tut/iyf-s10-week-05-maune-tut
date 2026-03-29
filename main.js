// 1. Select the elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// --- WEEK 7: STATE ---
let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

function saveToStorage() {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}

// 2. The function to add a task to the UI
function renderTask(taskText) {
    const newLi = document.createElement('li');
    newLi.textContent = taskText;

    newLi.onclick = function() {
        newLi.classList.toggle('completed');
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Remove";
    deleteBtn.style.marginLeft = "15px";

    deleteBtn.onclick = function(e) {
        e.stopPropagation();
        newLi.remove();
        // WEEK 7: Remove from memory
        tasks = tasks.filter(t => t !== taskText);
        saveToStorage();
    };

    newLi.appendChild(deleteBtn);
    todoList.appendChild(newLi);
}

// --- WEEK 7: LOAD SAVED ITEMS ---
tasks.forEach(task => renderTask(task));

// 3. Adding new tasks
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        renderTask(taskText);
        // WEEK 7: Save to memory
        tasks.push(taskText);
        saveToStorage();
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

addBtn.addEventListener('click', addTask);
