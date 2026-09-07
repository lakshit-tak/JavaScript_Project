const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


function showTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task) => {

        const li = document.createElement("li");

        li.textContent = task.text;

        const deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.classList.add("delete")

        li.appendChild(deleteBtn);

        li.addEventListener("click", () => {

            li.classList.toggle("completed");

            task.completed = !task.completed;

            saveTasks();

        });


        deleteBtn.addEventListener("click", (e) => {

            e.stopPropagation();

            li.remove();

            tasks = tasks.filter((item) => item !== task);

            saveTasks();

        });


        if (task.completed) {
            li.classList.add("completed");
        }

        taskList.appendChild(li);

    });
}


function saveTasks() {localStorage.setItem("tasks",JSON.stringify(tasks)
    );

}

const addTask = () => {
    const taskText = input.value.trim();

    if (taskText === "") {

        alert("pleace write a task first");
        return;
    }

    const task = {
        text: taskText,
        completed: false
    };

    tasks.push(task);

    saveTasks();

    showTasks();

    input.value = "";
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", (e) => {

    if(e.key === "Enter"){

        addTask();
    }
});

showTasks();

