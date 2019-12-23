//Keyboard Events

//1.keypress

// document.addEventListener("keypress",run)


// function run(e){
//     console.log(e.which);
//     console.log(e.key);
// }
//2.Keydown
// document.addEventListener("keydown",run)


// function run(e){
//    // console.log(e.which);
//     console.log(e.key);
// }


//3.Keyup

// document.addEventListener("keyup",run)


// function run(e){
//    // console.log(e.which);
//     console.log(e.key);
// }

//Sample

const header=document.querySelector(".card-header");
const todoInput=document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent=e.target.value;
}