// function Employee(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;
// }

// Employee.prototype.showInfos=function(){
//     console.log("İsim :" + this.name + "Yaş :" + this.age + "Maaş :" + this.salary);
// }

// const emp =new Employee("Seckin",34,100);


// console.log(emp);


class Employee{

    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;

    }

    shoInfos(){
            console.log("İsim :" + this.name + "Yaş :" + this.age + "Maaş :" + this.salary);
    }
}


const emp=new Employee("Seckin",34,100);

console.log(emp);

emp.shoInfos();