
//1.Array Destructing

//let number1,number2;

//arr=[100,200,300,400];

// number1=arr[0];
// number2=arr[1];

//destructing

//[number1,number2]=arr;

//const[number1,number2]=arr;

//console.log(number1,number2);


//2.Object Destructing

// const numbers={
//    a:10,
//    b:20,
//    c:30,
//    d:40,
//    e:50
// };


//const{number1,number2,number3}=numbers;

//const{a:number1,b:number2,c:number3}=numbers;

//console.log(number1,number2,number3);

//Function Destructing

const getLang=()=>["Java","C#","Javascript"];

const[lang1,lang2,lang3]=getLang();

console.log(lang1,lang2,lang3);

const person={
   name:"Seckin",
   age:34,
   hometown:"Bilecik",
   showInfos:()=>console.log("Some informations about person...")
};

const{name:isim,age:yas,hometown:memleket,showInfos:BilgileriGoster}=person;

console.log(isim,yas,memleket);

BilgileriGoster();