//Scope Concept

//Global Scope


// function a()
// {
//     //Function Scope
// }

// if (){

//     //Block scope
// }



//1.Global Scope

// var   value1=10;
// let   value2=20;
// const value3=30;


//2.Function Scope

// function Func(){

//      var  value1=40;
//      let  value2=50;
//     const value3=60;

//     console.log(value1,value2,value3)

// }


// Func();

// console.log(value1,value2,value3);

//3.Block Scope


// if(true){

//      var a=10;
//      let b=20;
//      const c=30;

//     // console.log(a,b,c);

// }


// console.log(a);
// console.log(b);
// console.log(c);


//3.Block Scope -2

    //  var a=10;
    //  let b=20;
    //  const c=30;

    // if(true){
       
    //  var a=40;
    //  let b=50;
    //  const c=60;

    //  console.log(a,b,c);

    // }

    // console.log(a,b,c);
//Block Scope-3

var dbPassword="1234";//use const or let instead of var

if(true){

    var dbPassword="4568";
}

console.log(dbPassword);