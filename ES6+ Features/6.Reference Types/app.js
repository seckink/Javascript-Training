// let a="Seckin";
// let b="Seckin";

// if(a===b){
//   console.log("Eşit");
// }

// let array1=[1,2,3,4,5];
// let array2=[1,2,3,4,5];

// if(array1===array2){
//    console.log("Eşit");
// }


let arr=[1,2,3,4,5];

console.log(typeof arr[0]);

const person1={name:"Seckin",age:34};
const person2={name:"Seckin",age:34};


if(person1===person2){
   console.log("Eşit");
}


const cities=new Map();
const key =[1,2,3];
cities.set("İstanbul",16);
cities.set("Ankara",5);
//cities.set([1,2,3],5);
cities.set(key,5)

//console.log(cities.get([1,2,3]));
console.log(cities.get(key));

