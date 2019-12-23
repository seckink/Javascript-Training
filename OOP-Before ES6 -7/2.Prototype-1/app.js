// const obj=new Object();
// const obj2=new Object();
// obj.name="seckin";
// console.log(obj);


function Employee(name,age,salary){ // constructor(Yapıcı Fonksiyon)
    this.name=name;
    this.age=age;
    this.salary=salary;
    
    
    this.showInfos=function(){
       console.log(this.name ,this.age,this.salary);
    }
   
    this.tostring=function(){
        console.log("This is an employee object");
    }
  }


  const emp1=new Employee("seckin",34,1000);

  console.log(emp1);
console.log(emp1.tostring());
