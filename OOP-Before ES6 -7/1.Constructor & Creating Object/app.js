//console.log(window);
//console.log(this);
// const emp1={
//     name:"seckin",
//     age:34,
//     showInfo:function(){
//         console.log("some info is loading..")
//     }
// }

// emp1.salary=1000;

// const emp2={name:"zızı",age:30}

// console.log(emp1);

// function Employee(){ // constructor(Yapıcı Fonksiyon)
//   this.name="Seckin";
//   this.age=34;
//   this.salary=1000;
// }

// function Employee(){ // constructor(Yapıcı Fonksiyon)
//   this.name="Seckin";
//   this.age=34;
//   this.salary=1000;
// }

//new instance


//const date=new Date();

//const emp1=new Employee();

//console.log(emp1);


function Employee(name,age,salary){ // constructor(Yapıcı Fonksiyon)
  this.name=name;
  this.age=age;
  this.salary=salary;
  
  
  this.showInfos=function(){
     console.log(this.name ,this.age,this.salary);
  }
  //console.log(this);
}

const emp1=new Employee("Seckin",34,2000);
const emp2=new Employee("Ali",30,3000);

emp1.showInfos();
emp2.showInfos();
//console.log(emp1,emp2);



