var formEl = document.querySelector("#task-form");
var ulEl = document.querySelector("#tasks-to-do"); 


var createTaskHandler = function(){
    event.preventDefault();
    
    var liEl = document.createElement("li");
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    var taskInfoEl = document.createElement("div");
    // give it a class name 
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    liEl.className = "task-item";
    liEl.appendChild(taskInfoEl);
    ulEl.appendChild(liEl); 
}

formEl.addEventListener("submit",createTaskHandler);


