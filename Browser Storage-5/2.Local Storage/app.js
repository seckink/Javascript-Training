//Local Storage

//setItem

//localStorage.setItem("a","1");//always string
//localStorage.setItem("b","2");

//GetItem

// const value=localStorage.getItem("a");
// console.log(value);
// console.log(typeof value);

//clearItem

//localStorage.clear();


// if(localStorage.getItem("a")===null){
//   console.log("The data you query does not exist ");
// }else{
//   console.log("The data you query exist ");
// }

//Local Storage-Storage Array

//const todos=["todo1","todo2","todo3"];

//localStorage.setItem("todos",todos);

//console.log(localStorage.getItem("todos"));

//localStorage.setItem("todos",JSON.stringify(todos));

//const value=JSON.parse(localStorage.getItem("todos")) ;

//console.log(value);

const form=document.getElementById("todo-form");
const todoInput=document.getElementById("todo");


form.addEventListener("submit",addTodo);

function addTodo(e){
    const value=todoInput.value;
    let todos;

    if(localStorage.getItem("todos")===null){
       
        todos=[];
    
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }

     todos.push(value);

     todos=localStorage.setItem("todos",JSON.stringify(todos));

    e.preventDefault;
}

