const filterInput=document.getElementById("filter");
const todoForm=document.getElementById("todo-form");


//First Way
// filterInput.onfocus=function(){
//     console.log("Hello");
// }

//Second Way

// filterInput.addEventListener("focus",function(e){
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);
//     console.log(e.type);
//     console.log("Hello");
// });

todoForm.addEventListener("submit",submitForm);

function submitForm(e){
    console.log("Submit Eventi");
    e.preventDefault();
}


//console.log(filterInput);