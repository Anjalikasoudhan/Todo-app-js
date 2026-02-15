const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
let todos = [];

addBtn.addEventListener('click', function() {
    const input = todoInput.value;
    if (input == "") return;
    const obj = {
        text: input,
        completed: false
    };
    todos.push(obj);
    saveTodos();
    
    // Create the list element (rendering logic)
    renderItem(obj);
    
    todoInput.value = "";
});

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

window.onload = function() {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
        renderTodos();
    }
}

function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((obj) => {
        renderItem(obj);
    });
}


function renderItem(obj) {
    const list = document.createElement("li");
    list.innerText = obj.text;

    if (obj.completed) {
        list.classList.add("completed");
    }

    list.addEventListener('click', () => {
        list.classList.toggle("completed");
        obj.completed = !obj.completed;
        saveTodos();
    });

    const deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";

    deletebtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents marking as complete when clicking delete
        todos = todos.filter(t => t !== obj);
        saveTodos();
        renderTodos();
    });

    const editBtn=document.createElement("button");
    editBtn.innerText="Edit";


    editBtn.addEventListener("click",()=>{
    const input=document.createElement("input");
    input.type="text";
    input.value=obj.text;

    list.classList.remove("completed");
    list.innerHTML="";
    list.appendChild(input);
    input.focus();

    input.addEventListener("keypress",(e)=>{
        if(e.key=="Enter"){
            obj.text=input.value;
            saveTodos();
            renderTodos();
        }
    });
   });

    list.appendChild(deletebtn);
    list.appendChild(editBtn);
    todoList.appendChild(list);
}
