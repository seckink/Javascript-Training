//RetrieveById for Element

let element;


//element=document.getElementById("todo-form");
//element=document.getElementById("tasks-title");

//RetrieveByClass for element

//element=document.getElementsByClassName("list-group-item");
//element=document.getElementsByClassName("card-header");

//RetrieveByTag

//element=document.getElementsByTagName("a");


//QuerySelector=>Css Selector -Return one element

//element=document.querySelector("#tasks-title");

//element=document.querySelector(".list-group-item");

//element=document.querySelector("li");

//element=document.querySelector("div");

//QuerySelectorAll=>Choosing all element

element=document.querySelectorAll(".list-group-item");//NodeList

element.forEach(function(el){console.log(el)});

//console.log(element);