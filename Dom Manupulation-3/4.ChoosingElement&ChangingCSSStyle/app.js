const element=document.querySelector("#clear-todos");


//1.properties of element

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList[0]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

//2.Changing properties of style and element

// element.className="btn btn-danger";
// element.style.color ="#000";
// element.style.marginLeft="30px";
// element.href="https://www.google.com.tr";
// element.target="_blank";
// element.textContent="Silmek için tıklayınız..";
// element.innerHTML="<span style='color:green'>Silmek için tıklayınız..</span>";


//const elements=document.querySelectorAll(".list-group-item");//NodeList

// elements.forEach(function(el){
//     el.style.color="red";
//     el.style.background="#eee";
// })


 let element2=document.querySelector("li:last-child");
 element2=document.querySelector("li:nth-child(2)");
 element2=document.querySelector("li:nth-child(3)");
 element2=document.querySelector("li:nth-child(4)");
 element2=document.querySelectorAll("li:nth-child(odd)");
 element2=document.querySelectorAll("li:nth-child(even)");

 element2.forEach(function(el){
     el.style.background="#ccc";
     el.style.color="red";
 })
 console.log(element2);