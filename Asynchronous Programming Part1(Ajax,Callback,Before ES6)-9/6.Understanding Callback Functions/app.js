

// const langs=["c#","Java","Javascript"];

// langs.forEach(function(lang){
//    console.log(lang);
// });


// document.getElementById("btn").addEventListener("click",function(){
//     console.log("Tikla");
// })

//1.
// function process1() {
//   console.log("process 1");
// }

// function process2() {
//     console.log("process 2 ");
// }

// process1();
// process2();

//2.

// function process1() {

//     setTimeout(function(){
//         console.log("process 1");
//     },3000)
  
// }

// function process2() {

//     setTimeout(function(){
//         console.log("process 2 ");

//     },2000);
// }

// process1();
// process2();
// console.log("Hello");

//3.

// function process1(callback) {

//     setTimeout(function(){
//         console.log("process 1");
//         callback();
//     },3000)
  
// }

// function process2() {

//     setTimeout(function(){
//         console.log("process 2 ");

//     },2000);
// }

// process1(process2);

//4.

//  const langs=["c#","Java","Javascript"];


// function addLang(lang){
//     setTimeout(() => 
//     {
//       langs.push("lang");
//       console.log("added");    
//     }, 2000);
// }


// function getAllLangs(){
//     setTimeout(function(){
//           langs.forEach(function(lang){
//                console.log(lang);
//           })
//         },1000);
// }

// addLang("PL SQL");
// getAllLangs();//Asenkron State

//5.

const langs=["c#","Java","Javascript"];


function addLang(lang,callback){
    setTimeout(() => 
    {
      langs.push(lang);
      //console.log("added");
      callback();    
    }, 2000);
}


function getAllLangs(){
    setTimeout(function(){
          langs.forEach(function(lang){
               console.log(lang);
          })
        },1000);
}

addLang("Pl Sql",getAllLangs);
