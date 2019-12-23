const todoInput=document.querySelector("#todo");
const form=document.querySelector("#todo-form");
const todoFilter=document.querySelector("#filter");
const todoList=document.querySelector(".list-group");
const clearButton=document.querySelector("#clear-todos");
const cardBodyFirst=document.querySelectorAll(".card-body")[0];
const cardBodySecond=document.querySelectorAll(".card-body")[1];


eventListeners();


function eventListeners(){

    form.addEventListener("submit",addTodo);
    todoFilter.addEventListener("keyup",filterTodos);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    clearButton.addEventListener("click",clearAllTodos);
    cardBodySecond.addEventListener("click",deleteTodo);

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

function clearAllTodos(){

  if(confirm("Are you sure you want to delete all todos ")){

     while(todoList.firstElementChild!=null){
 
             todoList.firstElementChild.remove();

     }

     localStorage.removeItem("todos");

  }

}

function loadAllTodosToUI(){
   
    let todos=getTodosFromStorage();

    todos.forEach(function(todo){

        addTodoToUI(todo);

    })
  
}

function deleteTodo(e){

  if(e.target.className==="fa fa-remove"){
    
       console.log(e.target);
      
     e.target.parentElement.parentElement.remove();

      deleteTodoFromStorage(e.target.parentElement.parentElement.textContent.trim());
      showAlert("success","Todo has been deleted succesfully.");

  }
   
}


function deleteTodoFromStorage(todoToBeDeleted){

  let todos=getTodosFromStorage();

  todos.forEach(function(todo,index){

     if(todo===todoToBeDeleted){
    
        todos.splice(index,1);

  }
  
  }
  );
  localStorage.setItem("todos",JSON.stringify(todos));

}


function addTodo(e){

  const checkExistingRecord=IsThereAnyRecordOnListTable();

  const newTodo=todoInput.value.trim();

  if(newTodo===""){

     showAlert("danger","Please enter new todo!!!");

  }else{
  
    if(checkExistingRecord===true){
      showAlert("info","There already exists same record ");
    }else{
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
    showAlert("success","Todo has been added succesfully!");
  }
  }

  e.preventDefault();

}


function showAlert(type,message){

     
//   <div class="alert alert-danger" role="alert">
  //   This is a danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  // </div>

    const alert=document.createElement("div");
    alert.className=`alert alert-${type}`;
    alert.textContent=message;

    console.log(cardBodyFirst);
    cardBodyFirst.appendChild(alert);

  setTimeout(function(){
      alert.remove();
  }, 5000);
}

function addTodoToUI(newTodo){

        // <!-- <li class="list-group-item d-flex justify-content-between">
        //                     Todo 1
        //                     <a href = "#" class ="delete-item">
        //                         <i class = "fa fa-remove"></i>
        //                     </a>

        //                 </li>-->

  const listItem=document.createElement("li");
  const link=document.createElement("a");

  link.className="delete-item";
  link.href="#";
  link.innerHTML="<i class ='fa fa-remove'></i>";
  
  listItem.className="list-group-item d-flex justify-content-between";

  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);

  todoList.appendChild(listItem);

  todoInput.value="";



}


function addTodoToStorage(newTodo){

     let todos=getTodosFromStorage();

     todos.push(newTodo); 
     
     localStorage.setItem("todos",JSON.stringify(todos));

}


function getTodosFromStorage(){

    let todos=localStorage.getItem("todos");

    if(todos===null){

         todos=[];

    }else{
  
          todos=JSON.parse(todos);

    }

    return todos;
}

function filterTodos(e){
 
   const valueTobeFiletered=e.target.value.toLowerCase();
   const listItems=document.querySelectorAll(".list-group-item");

   listItems.forEach(function(item){

     const itemText=item.textContent.toLowerCase();

     if(itemText.indexOf(valueTobeFiletered)===-1){
   
      item.setAttribute("style","display : none !important");

     }else{

      item.setAttribute("style","display :block");
     }

   })


   

}