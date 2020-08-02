var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);
var ulEl = document.querySelector("#tasks-to-do"); 


var createTaskHandler = function(){
    
    var liEl = document.createElement("li");
    liEl.textContent = "Adding another task";
    liEl.className = "task-item";
    ulEl.appendChild(liEl); 
}

buttonEl.addEventListener("click",createTaskHandler);


