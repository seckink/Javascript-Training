
function Employee(name,age,salary){ 
    this.name=name;
    this.age=age;
    // this.showInfos=function(){
    //     console.log("Name : " + name + "Age : " + age );
    // }


}

Employee.prototype.showInfos=function(){
    console.log("Name : " + name + "Age : " + age );
}

const emp1 =new Employee("Seckin",34);
const emp2 =new Employee("Ali Veli",25);

console.log(emp1);
console.log(emp2);