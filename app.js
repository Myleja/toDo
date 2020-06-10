//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");

//event listeners
todoButton.addEventListener("click", addTodo);


//functions
function addTodo(event) {
    //prevent form from submiting
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = "hey";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //check trash  button
    const trashButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-trash"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);

}