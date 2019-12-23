let value;

const programmer={
   name:"Seckin",
   age:34,
   email:"seckin.kaymak@i2i-systems.com",
   langs:["C#","VB.Net","Javascript","Pl SQL"],
   address:{
       city:"İstanbul",
       town:"Maltepe"
   },

   isWorking:function(){
         console.log("Programmer is working");
   }


}

console.log(programmer);

value=programmer.email;//common
value=programmer["email"];

value=programmer.address.city;

value=programmer.isWorking();

const programmers=[
    {name:"Seckin",age:34},
    {name:"Nedim",age:28}
];

value=programmers[0].name;

console.log(value);