//Bir fonksiyonu farklı objelerle kullanmamızı sağlar.Function prototype'ı içerisinde yer alır.
const obj1={
    number1:10,
    number2:20
}

const obj2={
    number1:30,
    number2:40
}


function AddNumbers(number3,number4){
    //console.log(this);
    //console.log(this.number1);
    console.log(this.number1 + this.number2+number3 + number4);
}


//AddNumbers(100,50);

//AddNumbers.call(obj1,100,500);
//AddNumbers.call(obj2,100,500);

//AddNumbers.apply(obj1,[100,500]);
//AddNumbers.apply(obj2,[100,500]);

function getNumbersTotal (number3,number4) {
  return  this.number1  + this.number2 + number3 + number4;
}

 const copyFunc1=getNumbersTotal.bind(obj1);
// const copyFunc2=getNumbersTotal.bind(obj2);

console.dir(copyFunc1);

//console.log(copyFunc1(100,200));
//console.log(copyFunc2(500,320));
