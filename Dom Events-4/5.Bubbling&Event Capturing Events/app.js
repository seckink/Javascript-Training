//Event Bubbling

// document.querySelector(".container").addEventListener("click",function(){
//    console.log("Div Container");
// });


// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("Card Row");
//  });
 
//  document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("Card Body");
//  });

 //Event Capturing or Delegation

// const cardBody= document.querySelectorAll(".card-body")[1];

// cardBody.addEventListener("click",run);

// function run(e)
// {
   
//     //console.log(e.target);
//     //console.log("Hello");
//     if(e.target.className==="fa fa-remove"){
   
//       console.log("Silme İşlemi");
//     }

//     if (e.target.id==="filter"){
  
//       console.log("Filtreleme İşlemi");
//     }

//     if (e.target.id==="clear-todos"){
  
//         console.log("Tüm taskları silme işlemi");
//       }
// }