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
    
    
     todos.push=obj;
     console.log(todos);
   
    const list=document.createElement("li");
    list.innerText=obj.text;
   
    list .addEventListener('click',()=>{
    list.classList.toggle("completed");
    obj.completed = !obj.completed;
    console.log(obj);
    });

    
    const deletebtn=document.createElement("button");
    deletebtn.innerText="Delete";
    list.appendChild(deletebtn);
    
    deletebtn.addEventListener('click',()=>{
        list.remove();
    });
     todoList.appendChild(list);
    todoInput.value="";
})