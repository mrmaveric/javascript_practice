/**
 * Created by ChloeGyuriKim on 7/12/14.
 */
//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivty so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); // new -task
var addButton= document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); // incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //complete-tasks

//New Task List Item
var createNewTaskElement = function(taskString) {
   //Create new item
   var listItem = document.createElement("li");
   //input (checkbox)
    var checkBox = document.createElement("input");
    //label
    var label = document.createElement("label");
    //input (text)
    var editInput = document.createElement("input");
    //button.edit
    var editButton = document.createElement("button");
    //button.delete
    var deleteButton = document.createElement("button");

    //Each elements needs modified

    checkBox.type="checkbox";
    editInput.type="text";

    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText= "Delete";
    deleteButton.className= "delete";

    label.innerText= taskString;
    //Each elements needs appended
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

//Add a new task
var addTask=function (){
    console.log("Add task...");
    //Create a new list item with the text from #new-task:
    var listItem = createNewTaskElement("Some New Task");
    //Append listItem to incompleteTaskHolder
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);

    taskInput.value = "";
}


//Edit an existing task
var editTask = function(){
    console.log("Edit task...");
    //When the Edit button is pressed
    var listItem= this.parentNode;

    var editInput = listItem.querySelector("input[type=text");
    var label = listItem.querySelector("label");

    var containsClass = listItem.classList.contains("editMode");
    //if the class of the parent is .editMode
    if (containsClass) {

        //Switch from .editMode
        //input value becomes the label's text
        label.innerText = editInput.value;
     }
        else {
            //Switch to .editMode
            //input value becomes the label's text
            editInput.value= label.innerText;
        }

        //Toggle .editMode on the parent
        listItem.classList.toggle("editMode");
}


//Delete an existing task
var deleteTask = function(){
    console.log("Delete task...");

    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    //Remove the parent list item from the ul
    ul.removeChild(listItem);

}


//Mark a task as complete

var taskCompleted = function(){
    console.log("Completed task...");
    //Append the task list item to the #completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}


//Mark a task as incomplete
var taskIncomplete = function(){
    console.log("Incompleted task...");
    //Append the task list item to the #incomplete-tasks
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents= function(taskListItem, checkBoxEventHandler) {
    console.log("Bind list item events");
    //select it's children
    var checkbox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton=taskListItem.querySelector("button.delete");

        //bind editTask to edit to button
        editButton.onclick = editTask();
        //bind deleteTask to delete button
        deleteButton.onclick = deleteTask();
        //bind checkBoxEventHandler to checkbox
        checkbox.onchange = checkBoxEventHandler;

}

var ajaxRequest = function (){
    console.log("AJAX request");
}
// Set the click handler to the addTask function
addButton.onclick = addTask;

addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);


//cycle over incompleteTaskHolder ul list item

for(var i =0; i<incompleteTasksHolder.children.length; i++) {

    // for each list item
        //bind events to list item's children (taskCompleted)
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted, i++);
}

//cycle over completeTaskHolder ul list item
    // for each list item
        //bind events to list item's children (taskIncomplete)











