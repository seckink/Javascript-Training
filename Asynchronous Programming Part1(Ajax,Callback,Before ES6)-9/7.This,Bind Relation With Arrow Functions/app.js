const person={
  
     age:25,
     tellAge:function(){
         //this equals to person object
         console.log(this);  
         console.log(this.age);
      }

    //   tellAge:function(){
    //     //this equals to person object
    //     console.log(this);  
    //     console.log(this.age);
    //  }.bind(this)

     //Third Way 
    // tellAge:()=>{
    //     console.log(this);
    //     console.log(this.age);
    // }
    
     //this equals to window object
  
}

person.tellAge();