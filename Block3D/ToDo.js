document.getElementById("btnNewTask").addEventListener("click", addTask);
document.getElementById("txtNewTask").addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const list = document.getElementById("lstTasks");
    const task = document.createElement("li");
    const newTask = document.getElementById("txtNewTask");
    task.innerText = newTask.value;
    list.appendChild(task);
    newTask.value = "";
}