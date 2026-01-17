const todoInput=document.getElementById("todoInput");
const addBtn=document.getElementById("addBtn");
const todoList=document.getElementById("todoList");

addBtn.addEventListener('click',function(){

    const input=todoInput.value;
    if(input=="")return;

    const list=document.createElement("li");
    list.innerText=input;
    todoList.appendChild(list);
    console.log(todoList);

    const deletebtn=document.createElement("button");
    deletebtn.innerText="Delete";
    list.appendChild(deletebtn);
    deletebtn.addEventListener('click',()=>{
        list.remove();
    });

    todoInput.value="";
})