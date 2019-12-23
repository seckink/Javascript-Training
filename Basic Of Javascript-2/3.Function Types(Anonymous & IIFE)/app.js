// function SayHello(){
  
//     console.log("Hello");

// }

// //Function expression
// const output=function(name){
//       console.log("Hello " +  name);
// }

// output("Seckin");


//Immediately Invoked Function Expression(IIFE)==>Tanımlandığı yerde çalışan fonksiyon =>Other Name Self-Invoking Function 

// (function(name)
// {
//    console.log("Hello " + name)
// })("Seckin");


// const database={
//  host:"localhost",
//  add:function(){
//       console.log("saved..")
//  },
//  get:function(){
//    console.log("retrieved..")
// },
//  update:function(id){
//        console.log(`id :${id} updated.`)
// },
// delete:function(id){
//    console.log(`id :${id} deleted.`)
// }
// }

// console.log(database.host);
// console.log(database.add());
// console.log(database.delete(10));




// function DisplayPersonInfo(name="No Info",age="No Info"){

//     //if (typeof name===undefined) name= ("No Info");
//     //if (typeof age===undefined)  age = ("No Info");
 
//     console.log(`Name : ${name} Age : ${age}`);

// }

// SayHello();//Call Function

// DisplayPersonInfo("seckin",34);

// DisplayPersonInfo("seckin");


// function square(a){

//      return a*a;

// }

// function cube(a){

//      return a*a*a;

// }


// let a=square(a);

// a=cube(a);//or a=cube(square(4))

// console.log(a);



//Call back Function-1

let hello=function()
{
   console.log("This is a callback function");
}

 setTimeout(hello,3000);

 console.log("How are you?");

//Callback  Function-2(Anonymous Function)

// setTimeout(function()
// {
//     console.log("This is a anonymous callback function.")
// },3000);

//  console.log("How are you?");

//Callback Function-3

// document.querySelector("#btn").addEventListener("click",function(){

//        console.log("Clicked Button");

// });

// console.log("Hello");

//Callback Function with Arrow Function

//  document.querySelector("#btn").addEventListener("click",()=> console.log("Clicked Button..."));

// console.log("Hello");

//Callback Function-4

// document.querySelector("#btn").addEventListener("click",function(){
//     console.log("Butona tıklandı.");
// });

// console.log("How Are you");

//Callback function 

let posts=[
  {
    "title":"Title 1",
    "body":"Body 1"
  },
  {
   "title":"Title 2",
   "body":"Body 2"
 }
];

function addPost(callback){
 setTimeout(function(){
     posts.push({"title":"Title 3","body":"Body 3"});
     callback();
 },3000);


}

function getAllPosts(){

   setTimeout(function(){
     let output="<ul>";
     posts.forEach(function(post){
        output+=`<li>${post.title} - ${post.body}</li>`;
     })
     
      output+="</ul>";

      document.getElementById("output").innerHTML=output;

   },2000);
}

//addPost();
//getAllPosts();

addPost(getAllPosts);
