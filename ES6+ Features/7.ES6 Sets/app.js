const mySet=new Set();

mySet.add(100);
mySet.add(100);
mySet.add("seckin");
mySet.add(3.14);
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:1,b:2});

const mySet2=new Set([100,3.14,"seckin"]);

//console.log(mySet);
//console.log(mySet2);

//size

//console.log(mySet.size);

//delete methodu

//mySet.delete("seckin");

//has

// console.log(mySet.has("seckin"));
// console.log(mySet.has([1,2,3]));

//For Each

// mySet.forEach(function(value){
//     console.log(value);
// })

//for of

// for(let value of mySet){
//     console.log(value);
// }

//Creatng array from Set

console.log(Array.from(mySet));