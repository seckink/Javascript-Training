let value;

const numbers=[45,32,65,89,62,5];

//const numbers2=new Array[1,2,6,12];

const langs=["Javascript","c#","Java","PlSql"];

const a=["Hello",33,null,undefined,3.14];

value=numbers.length;

value=numbers[0];
value=numbers[2];
value=numbers[numbers.length-1]//numbers[6];

//Update index value

numbers[2]=1000;

value=numbers;

//Index Of

value=numbers.indexOf(1000);

//push==>add the value at the end of the array

numbers.push(9999);



value=numbers;

//unshift=>add the value begining of the array


numbers.unshift(1111);

value=numbers;

//pop=>remove item form at the end of the array

numbers.pop();

value=numbers;



//shift=>remove item form at the begining of the array

numbers.shift();

value=numbers;


//splice=>delete values in specified range

numbers.splice(0,3);

value=numbers;

//reverse=>

numbers.reverse();

value=numbers;

//sort

//value=numbers.sort();

value=numbers.sort(function(x,y) {return x-y});

value=numbers.sort(function(x,y){ return y-x});

console.log(value);


