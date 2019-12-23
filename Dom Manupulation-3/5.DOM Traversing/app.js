let value;


const toDoList=document.querySelector(".list-group");
const toDo=document.querySelector(".list-group-item:nth-child(2)");
const cardRow=document.querySelector(".card.row");

value=toDoList;
//value=toDo;
//value=cardRow;


//including tect
//value=toDoList.childNodes;
//value=toDoList.childNodes[0];

//only elements

//value=toDoList.children;
//value=toDoList.children[toDoList.children.length-1];
// value=toDoList.children[3].textContent="Changed";

//value=cardRow.children;
// value=cardRow.children[2].children[1].textContent="Changed";


// value=toDoList.firstElementChild;
// value=toDoList.lastElementChild;
// value=toDoList.children.length;
// value=toDoList.childElementCount;


// value=cardRow;
// value=cardRow.parentElement;
// value=cardRow.parentElement.parentElement;


// //element sibling

//value=toDo;
// value=toDo.previousElementSibling;
// value=toDo.nextElementSibling;
// value=toDo.nextElementSibling.nextElementSibling;
 value=toDo.previousElementSibling.previousElementSibling;


console.log(value);
