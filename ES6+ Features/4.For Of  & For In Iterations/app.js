let person={
  name:"Seckin",
  age:34,
  salary:1000
}

const langs=["Java","C#","Pyhton","PL SQL"];


const name="Seckin";

// For in (Object)

// for(let prop in person){
//     console.log(prop,person[prop]);
// };


// //For In(Array)

// for(let index in langs){
//     console.log(index,langs[index]);
// };

// //
// //For In(String)

// for(let index in name){
//     console.log(index,name[index]);
// };

//For Of(Object)

//  for(let prop of person){
//      console.log(prop,person[prop]);
//  };

 // For Of(Array)

for(let value of langs){
    console.log(value);
};

 // For Of(String)

 for(let character of name){
    console.log(character);
};