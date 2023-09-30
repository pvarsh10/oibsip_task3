document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const pendingList = document.getElementById("pendingList");
    const completedList = document.getElementById("completedList");

    addButton.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            createTask(taskText, pendingList, completeTask, "✔️");
            taskInput.value = "";
        }
    }

    function completeTask() {
        const taskText = this.previousElementSibling.textContent;
        moveTask(taskText, this, completedList, uncompleteTask, "↩️");
    }

    function uncompleteTask() {
        const taskText = this.previousElementSibling.textContent;
        moveTask(taskText, this, pendingList, completeTask, "✔️");
    }

    function createTask(taskText, list, clickHandler, buttonText) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = taskText;

        const completeButton = createButton(buttonText, clickHandler);
        const deleteButton = createButton("❌", deleteTask);

        li.appendChild(span);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        list.appendChild(li);
    }

    function moveTask(taskText, button, targetList, clickHandler, buttonText) {
        createTask(taskText, targetList, clickHandler, buttonText);
        button.parentElement.remove();
    }

    function createButton(text, clickHandler) {
        const button = document.createElement("button");
        button.textContent = text;
        button.addEventListener("click", clickHandler);
        return button;
    }

    function deleteTask() {
        this.parentElement.remove();
    }
});
