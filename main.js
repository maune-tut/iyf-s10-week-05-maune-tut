// 1. Select the elements (Task 9.1)
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 2. The function to add a task (Task 9.2)
function addTask() {
    const taskText = taskInput.value;

    if (taskText.trim() !== "") {
        // Create the <li> element
        const newLi = document.createElement('li');
        newLi.textContent = taskText;

        // --- TASK 10.3: Toggle "completed" when clicked ---
        newLi.onclick = function() {
            newLi.classList.toggle('completed');
        };

        // --- TASK 10.2: Create and Add Delete Button ---
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Remove";
        deleteBtn.style.marginLeft = "15px";

        deleteBtn.onclick = function(e) {
            e.stopPropagation(); // Stops the "toggle" from triggering
            newLi.remove();
        };

        // 3. Put everything together
        newLi.appendChild(deleteBtn);
        todoList.appendChild(newLi);

        // 4. Clear the input box
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

// 5. Connect the button to the function
addBtn.addEventListener('click', addTask);