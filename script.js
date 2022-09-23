// Selecting
let item = document.getElementById("inputfield");
let addbtn = document.getElementById('additems');
let listitems = document.getElementById('todo-list');

listitems.addEventListener('click', deleteitem);

// Event Listeners
addbtn.addEventListener('click', addTodo);


// Functions
function addTodo(event) {
  event.preventDefault();
  if(item.value === ""){
    alert('Cannot Insert Empty Item !! 😕');
  }
  else{
    // Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create LI

    const newTodo = document.createElement("li");
    newTodo.innerHTML = item.value;
    newTodo.classList.add("todo-item");

    todoDiv.appendChild(newTodo);
    
    //Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '❌';
    deleteBtn.classList.add("delete-btn");
    todoDiv.appendChild(deleteBtn);
    listitems.appendChild(todoDiv);
    item.value = "";

    //check button
    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = '✔';
    checkBtn.classList.add("check-btn");
    todoDiv.appendChild(checkBtn);
        
  }
  
}

function deleteitem(event) {

    const selected_item = event.target;
    console.log(selected_item);
    if (selected_item.classList[0] === "delete-btn") {
      const todo = selected_item.parentElement;
      todo.remove();
    }


    if (selected_item.classList[0] === "check-btn") {
      const todo = selected_item.parentElement;
      todo.classList.toggle('checked');
      
    }
}