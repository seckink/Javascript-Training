const Person={

     age:34,
    //  tellAge:function(){

    //     //this -Person
    //      console.log(this);
    //      console.log(this.age);
    //  }.bind(this)


     tellAge:()=>{
        console.log(this);
        console.log(this.age);
     }

     //this - window object

}

Person.tellAge();