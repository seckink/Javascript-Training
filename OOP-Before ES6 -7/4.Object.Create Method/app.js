
//First Sample
// const obj={
//     test1:function() {
//     console.log("Test 1")},
//     test2:function() {
//         console.log("Test 2")}
// }

// //console.log(obj);

// const emp=Object.create(obj);//to be used for inheritance

// emp.name="Seckin";
// emp.age=34;

// console.log(emp);

//Second Sample

function Person() {
    
}

Person.prototype.test1=function() {
    console.log("Test 1");
}
Person.prototype.test2=function() {
    console.log("Test 2");
}

//const person=new Person();

//console.log(person);


function  Employee(name,age) {
    this.name=name
    this.age=age
}

Employee.prototype=Object.create(Person.prototype);
Employee.prototype.myTest=function() {
     console.log("My Test");
}

const emp=new Employee("Seckin",34);

console.log(emp);