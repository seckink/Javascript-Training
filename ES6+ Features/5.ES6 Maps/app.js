//let myMap=new Map();

//console.log(typeof myMap);

//const key1="Seckin";
//const key2={a:10,b:20};
//const key3=()=>2;

//set
//myMap.set(key1,"String Değer");
//myMap.set(key2,"Object Literal Değer");
//myMap.set(key3,"Function Değer");

//get

//console.log(myMap.get(key1)); 
//console.log(myMap.get(key2));
//console.log(myMap.get(key3));


//console.log(myMap);

//Map Dimension

//console.log(myMap.size);


// const cities=new Map();

// cities.set("İstanbul",16);
// cities.set("Ankara",5);
// cities.set("İzmir",4);

// cities.forEach(function(value,key){
//     console.log(key,value);
// })

//For of-1

// for(let value of cities){
//     console.log(value);
// }

//For of-2

// for(let [key,value] of cities){//Destructing
//     console.log(key,value);
// }

//Map Keys

// for(let key of cities.keys()){
//   console.log(key);
// }

//Map Values

// for(let value of cities.values()){
//     console.log(value);
//   }


//Creating Map from Array
// const array=[["key1","value1"],["key2","value2"]];

// const lastMap=new Map(array);

// console.log(lastMap);

//Creating Array From Map

const cities=new Map();


cities.set("İstanbul",16);
cities.set("Ankara",5);
cities.set("İzmir",4);

const array=Array.from(cities);
//[["Ankara",5]["İstanbul",16]["İzmir",4]]
console.log(array);
