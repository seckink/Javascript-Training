// function Person(name,age) {
//     this.name=name;
//     this.age=age;
// }

// Person.prototype.showInfos=function () {
//    console.log("İsim :" + this.name + "Yaş :" + this.age);    
// }

// const person=new Person("Seckin",34);

// //console.log(person);

// function Employee(name,age,salary){
// //   this.name=name;
// //   this.age=age;
//   Person.call(this,name,age);
//   this.salary=salary;
// }


// Employee.prototype=Object.create(Person.prototype);
// // Employee.prototype.toString=function(){
// //     console.log("Employee");
// // }

// //Override
// Employee.prototype.showInfos=function(){
//     console.log("İsim :" + this.name + "Yaş :" + this.age + "Maaş :" + this.salary); 
// }

// const emp=new Employee("Seckin",34,1000);

class Person{ //SuperClass,BaseClass

     constructor (name,age){

        this.name=name;
        this.age=age;
     }

     showInfos(){
        console.log("İsim :" + this.name + "Yaş :" + this.age); 

     }

}

class Employee extends Person{ //derived Class,Sub Class,//Child Class
    constructor (name,age,salary){
       // this.name=name;
        //this.age=age;
        super(name,age);
        this.salary=salary;
    }

    showInfos(){
        console.log("İsim :" + this.name + "Yaş :" + this.age + "Maaş :" + this.salary); 

     }

     toString(){ //overriding
         console.log("employee");
     }

     raiseSalary(amount){ //extra method
         this.salary=this.salary +amount;
     }
}

const emp=new Employee("Seckin",34,1000);

//console.log(emp);

emp.raiseSalary(4000);

emp.showInfos();
emp.toString();

