//Set Timeout

setTimeout(() => {
    console.log("Hello");
}, 5000);

//Set Interval
let i=0;
let value=setInterval(() => {
    i++;
    console.log("Sayi :",i);
}, 2000);

//Clear Interval

document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);
})

