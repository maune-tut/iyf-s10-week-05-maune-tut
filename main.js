const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// --- WEEK 7: STATE (Now using Objects) ---
let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

function saveToStorage() {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}

// Function to render a single task object
function renderTask(taskObj) {
    const newLi = document.createElement('li');
    
    // Feature: Add the Date and Text
    newLi.innerHTML = `
        <span class="task-text">${taskObj.text}</span>
        <small style="color: gray; margin-left: 10px;">(${taskObj.date})</small>
    `;

    // Feature: Keep "Completed" status after refresh
    if (taskObj.completed) {
        newLi.classList.add('completed');
    }

    // Toggle Completed Status
    newLi.onclick = function() {
        taskObj.completed = !taskObj.completed; // Flip the true/false
        newLi.classList.toggle('completed');
        saveToStorage(); // Save the new status!
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Remove";
    deleteBtn.style.marginLeft = "15px";

    deleteBtn.onclick = function(e) {
        e.stopPropagation();
        newLi.remove();
        // Remove from memory using the unique ID
        tasks = tasks.filter(t => t.id !== taskObj.id);
        saveToStorage();
    };

    newLi.appendChild(deleteBtn);
    todoList.appendChild(newLi);
}

// Initial Load
tasks.forEach(task => renderTask(task));

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        // Create a Task Object
        const newTask = {
            text: taskText,
            id: Date.now(), // Unique ID based on time
            completed: false,
            date: new Date().toLocaleDateString() // Current Date
        };

        tasks.push(newTask);
        renderTask(newTask);
        saveToStorage();
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

addBtn.addEventListener('click', addTask);
