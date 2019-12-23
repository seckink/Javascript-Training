//creating variable
// var a=20;

// var b=10;

// var c=10;

// console.log(a,b,c);

//Primitive Types

//1.Number
// var a=10//number data type
// var b=3.14//number data type

// console.log(typeof a);
// console.log(typeof b);

//2.String

// var name="Seckin";

// console.log(name);
// console.log(typeof name);

//3.Boolean 

// var a =true;

// console.log(a);
// console.log(typeof a);


//4.null

// var a= null;

// console.log(a);

// console.log(typeof a);

//5.Undefined


// var a;

// console.log(a);

// console.log(typeof a);


//Referance Types

//1.Array
// var numbers=[1,2,3,4,5];

// console.log(numbers);
// console.log(typeof numbers);


//2.Object Definition
// var person={
//     name:"Seckin",
//     surname:"Kaymak",
//     age:34
// }

// console.log(person);
// console.log(typeof person);

//3.Date

// var date=new Date();

// console.log(date);

// console.log(typeof date);

//4.Function

// var hello=function(){
//     console.log("This is a function");
// }

// console.log(hello);
// console.log(typeof hello);

//The difference between Referance types  and Value type

// var a =10;

// var b =a;

// console.log(a,b);

// a =20;

// console.log(a,b);


var a =[1,2,3]

var b=a;

console.log(b);

a.push(4);

console.log(b);

if(a===b){

     console.log("Eşit");

}