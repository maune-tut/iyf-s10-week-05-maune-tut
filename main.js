// Task 9.1: Selecting Elements from the DOM
const mainHeader = document.getElementById('main-header');
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Log them to the console to verify they are connected
console.log("Header:", mainHeader);
console.log("Input Box:", taskInput);
console.log("Add Button:", addBtn);
// Task 9.2: Adding an Event Listener and Function
function addTask() {
    // 1. Get the text from the input box
    const taskText = taskInput.value;

    // 2. Create a new <li> element
    const newLi = document.createElement('li');
    newLi.textContent = taskText;

    // 3. Add the new <li> to our <ul> list
    todoList.appendChild(newLi);

    // 4. Clear the input box so it's ready for the next task
    taskInput.value = "";
}

// Attach the function to the button click
addBtn.addEventListener('click', addTask);