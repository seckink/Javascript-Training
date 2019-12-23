class MathOperations{
   
     square(x){
        console.log(x*x)
     }

        
    static cube(x){
        console.log(x*x*x)
     }

}


const math =new MathOperations();

math.square(4);

//console.log(math);

MathOperations.cube(4);