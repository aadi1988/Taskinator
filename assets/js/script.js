var formEl = document.querySelector("#task-form");
var ulEl = document.querySelector("#tasks-to-do"); 

var createTaskEl = function(taskDataObj){
    var liEl = document.createElement("li");
    
    var taskInfoEl = document.createElement("div");
    // give it a class name 
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    liEl.className = "task-item";
    liEl.appendChild(taskInfoEl);
    ulEl.appendChild(liEl); 
}

var taskFormHandler = function(){
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    
      // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
}

formEl.addEventListener("submit",taskFormHandler);


