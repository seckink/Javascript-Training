//Choosing All Elements

const form=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo");
const todoList=document.querySelector(".list-group");
const cardBodyFirst=document.querySelectorAll(".card-body")[0];
const cardBodySecond=document.querySelectorAll(".card-body")[1];


const filter=document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");

eventListeners();


function eventListeners(){ //All event Listeners
  form.addEventListener("submit",addTodo);
  document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
  cardBodySecond.addEventListener("click",deleteTodo);
  filter.addEventListener("keyup",filterTodos);
  clearButton.addEventListener("click",clearAllTodos);
  }

function clearAllTodos(e){
  
  if(confirm("Are you sure you want to delete all?")){
    //remove todos from UI
    //todoList.innerHTML="";//slow method

    while(todoList.firstElementChild!=null){
   
       todoList.removeChild(todoList.firstElementChild);
    }

     localStorage.removeItem("todos");
     
  }
   

}

function IsThereAnyRecordOnListTable(){
  let isTheRecordExist=false
  const listItems=document.querySelectorAll(".list-group-item");
  listItems.forEach(function(listItem){
    
    if(listItem.textContent.trim().toLowerCase()===todoInput.value.trim().toLowerCase()){
      isTheRecordExist=true;
    }else{
      isTheRecordExist=false;
    }
     
   
  })
  
  return isTheRecordExist;
}
 




function filterTodos(e){
  //console.log(e.target);
  const filterValue=e.target.value.toLowerCase();
  const listItems=document.querySelectorAll(".list-group-item");
  listItems.forEach(function(listItem){
    const text=listItem.textContent.toLowerCase();

    if(text.indexOf(filterValue)===-1){
     //notFound
            listItem.setAttribute("style","display : none !important");
    }else{
            listItem.setAttribute("style","display : block");
    }

  })
}

function deleteTodo(e){
  
  //console.log(e.target);
  if(e.target.className==="fa fa-remove"){

    e.target.parentElement.parentElement.remove();
    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent.trim());
    showAlert("success","Todo has been deleted succesfully");

  }
}

function deleteTodoFromStorage(deleteTodo)
{
  let todos=getTodosFromStorage();

  todos.forEach(function(todo,index){
    if(todo === deleteTodo){
       todos.splice(index,1);
    }
  });

  localStorage.setItem("todos",JSON.stringify(todos));

}


function loadAllTodosToUI(){
  let todos=getTodosFromStorage();

  todos.forEach(function(todo){
    addTodoToUI(todo);
  })
}

function addTodo(e){ 

  const checkExistingRecord=IsThereAnyRecordOnListTable();
  const newTodo =todoInput.value.trim();

  //console.log(newTodo);

   if(newTodo===""){
 
    //   <div class="alert alert-danger" role="alert">
  //   This is a danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  // </div>
  
   showAlert("danger","Please enter todo name...");
  
   }else{
          
    if(checkExistingRecord===true){
      showAlert("info","There already exists same record ");
    }else{
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
    showAlert("success","Todo has been added succesfully...");
  }
   }

  e.preventDefault();
}


function showAlert(type,message){
   const alert=document.createElement("div");
   alert.className=`alert alert-${type}`;
   alert.textContent=message;

   cardBodyFirst.appendChild(alert);
  
    setTimeout(function(){
      alert.remove();
      },2000);
 
   //console.log(alert);

  
}

function getTodosFromStorage()
{
  let todos;

  if(localStorage.getItem("todos")===null)
  {
      todos=[];
  }else{

    todos=JSON.parse(localStorage.getItem("todos"));

  }

   return todos;

}

function addTodoToStorage(newTodo){

   let todos=getTodosFromStorage();

   todos.push(newTodo);

   localStorage.setItem("todos",JSON.stringify(todos));


}

function addTodoToUI(newTodo){
  const listItem=document.createElement("li");
  const link=document.createElement("a");
  
  link.href="#";
  link.className="delete-item";
  link.innerHTML=" <i class = 'fa fa-remove'></i>"

  
  
  listItem.className="list-group-item d-flex justify-content-between";
 
 
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);

  todoList.appendChild(listItem);

  todoInput.value="";

  //console.log(listItem);

}