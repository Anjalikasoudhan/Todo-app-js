const todoInput=document.getElementById("todoInput");
const addBtn=document.getElementById("addBtn");
const todoList=document.getElementById("todoList");
let todos=[];


addBtn.addEventListener('click',function(){

    const input=todoInput.value;
    if(input=="")return;
    const obj={text:input,
               completed:false};
    todos.push(obj);
    console.log(todos);
     saveTodos();
    const list=document.createElement("li");
    list.innerText=obj.text;
   
    list .addEventListener('click',()=>{
    list.classList.toggle("completed");
    obj.completed = !obj.completed;
    console.log(obj);
    saveTodos();
    });

    
    const deletebtn=document.createElement("button");
    deletebtn.innerText="Delete";
    list.appendChild(deletebtn);
    
    deletebtn.addEventListener('click',()=>{
        
        todos = todos.filter(t => t !== obj);
        saveTodos();
        list.remove();
    });
  
     todoList.appendChild(list);
    todoInput.value="";
})

function saveTodos(){
     localStorage.setItem("todos",JSON.stringify(todos));
}

window.onload= function(){
    const storedTodos=this.localStorage.getItem("todos");
    if(storedTodos){
        todos=JSON.parse(storedTodos);
        renderTodos();
    }
}

function renderTodos(){
    todoList.innerHTML="";
    todos.forEach((obj)=>{
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

    deletebtn.addEventListener('click', () => {
      todos = todos.filter(t => t !== obj);
      saveTodos();
      renderTodos();
    });

    list.appendChild(deletebtn);
    todoList.appendChild(list);
    });
}