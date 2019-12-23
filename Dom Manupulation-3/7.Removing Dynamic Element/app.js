//Removing Dynamic Element

//const toDoList=document.querySelector("ul.list-group");
const toDoList=document.querySelector(".list-group");
const todos=document.querySelectorAll("li.list-group-item");

//Remove methodu

//todos[0].remove();

//Remove Child

toDoList.removeChild(toDoList.lastElementChild);
toDoList.removeChild(todos[3]);


console.log(todos);
console.log(toDoList);