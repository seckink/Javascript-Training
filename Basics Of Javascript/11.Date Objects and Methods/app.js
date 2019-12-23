let value;

const now=new Date();//provide get a current time.

const date1=new Date("03.23.1985 18:00");

const date2=new Date("03/23/1985");

const date3=new Date("03-23-1985");

const date4=new Date("March 23 1985");




value=date1.getMonth();
value=date1.getDate();
value=date1.getDay();


value=date1.getHours();
value=date1.getMinutes();
value=date1.getSeconds();
value=date1.getMilliseconds();


date1.setMonth(5);
date1.setDate(30);
date1.setFullYear(1987);
date1.setHours(20);
date1.setMinutes(10);
date1.setSeconds(15);

value=date1;

console.log(date1.toLocaleTimeString())


console.log(value);