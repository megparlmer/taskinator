//creating elements that will run when id is run
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//the function that adds new task
var createTaskHandler = function(event) {

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("Select[name='task-type']").value;
    console.log(taskTypeInput);
    
    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    //give it a class name
    taskInfoEl.className = "task-info";
    //add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    
    listItemEl.appendChild(taskInfoEl);
    
    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
    console.dir(listItemEl);
};

//a callback function
formEl.addEventListener("submit", createTaskHandler);
