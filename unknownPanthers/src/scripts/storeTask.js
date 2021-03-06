
// Bring in the data factory
const taskFactory=require("./taskFactory")

// Target the save task button
saveTaskButton = document.querySelector("#submitTask")

// Hold Local Storage

const fullDataBase = []

// Event listener for the save task button - upon click
saveTaskButton.addEventListener("click", storeTask, false)

// Target each form element and save them each to a variable
function storeTask() {
    let saveTaskName=document.getElementById("TaskForm").value
    let saveDescription=document.getElementById("DescriptionBox").value
    let saveDuedate=document.getElementById("DueDateForm").value
    let saveCategory=document.getElementById("CategoryForm").value
    // Invoke data factory and store in db variable
    let taskDatabase = taskFactory(saveTaskName,saveDescription, saveDuedate,saveCategory)
    fullDataBase.push(taskDatabase);

    // Save db to local storage
    localStorage.setItem("taskFactory",JSON.stringify(fullDataBase))
}






