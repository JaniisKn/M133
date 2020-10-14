document.getElementById("btnNewTask").addEventListener("click", addTask);
document.getElementById("txtNewTask").addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const newTask = document.getElementById("txtNewTask");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const label = document.createElement("label");
    var task = document.createElement("li");

    label.innerText = newTask.value;
    task.appendChild(checkbox);
    task.appendChild(label);
    document.getElementById("lstTasks").appendChild(task);
    newTask.value = "";
}