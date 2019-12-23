// let i=0;

// while (i < 10)
// {
 
//      console.log(i);

//      i++;//i+=1;

// }


// let i=10;

// while (i>0) {

//     console.log(i);
//     i--;
// }


//break,continue


// let i=0;

// while (i<10){

//      console.log(i);
//      if(i==5){
        
//         break;
       
//      }
 
//       i++;

// }



// let i=0;

// while (i<10){

//      if(i==3 || i==5){
        
//         i++;
//         continue;
       
//      }
 
//      console.log(i);
//      i++;

// }

//Do While

// let i=0;

// do{
//   console.log(i);
//   i++;
// }while(i<10);


//for

let langs=["C#","Javascript","Java"];

// let index=0

// while (index<langs.length){
//     console.log(langs[index]);
//     index+=1;
// }

// for(let index=0;index<langs.length;index++){
   
//       console.log(langs[index])
  
// }


// langs.forEach(function(lang,index){
//     console.log(lang,index);
// })

// const users=[
//     {name:"seckin",age:34},
//     {name:"nedim",age:28},
//     {name:"burak",age:30}
// ]

// const names=users.map(function(user){
//     return user.name
// })



// console.log(names);





// const users=
//     {name:"seckin",
//      age:34
    
//     }




// for (let key in users) {
   
//      console.log(key,users[key]);
 
// }


//filter

const array=[5,6,7,56,23];

const filteredArray=array.filter(number=>number>7);

console.log(filteredArray);