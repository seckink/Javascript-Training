
//1.

// function getData(data){//Promise objesi döndüren fonksiyon
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//           //  resolve("Olumlu Sonuç");
//             reject("Olumsuz Sonuç");
//         },5000);
//     });
// }

// // getData("Merhaba").then(function(response){
  
// //      console.log(response);
 
// // })

// getData("Merhaba").catch(function(err){
  
//     console.log(err);

// })

// // console.log(getData("Merhaba"));

//2.Her ikisinin birden kullanımı(Then,Catch)


// function getData(data){//Promise objesi döndüren fonksiyon
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
          
//             if(typeof data==="string"){
//                //Olumlu sonuc
//                resolve(data);
//             }
//             else{
//               //Olumsuz sonuc

//               reject(new Error("Lütfen Sting bir değer girin"))
//             }

//         },5000);
//     });
// }

// getData(24).then(function(response){
//     console.log("Gelen Değer " + response);
// }).catch(function(err){
//    console.error(err);
// })

//With Arrow Function
// getData(24)
// .then(response=>console.log("Gelen Değer " + response))
// .catch(err=>console.error(err));

function addTwo(number){

  return new Promise((resolve,reject)=>{
      setTimeout(function(){
             if(typeof number==="number"){
                  
                resolve(number+2);
  
             }else{

                reject(new Error("Lütfen bir sayı girin"));
             }
      },3000)
  }
  
  )

}

addTwo(10)
.then(response=>{
    console.log(response);
    return response+2;
}).then(response2=>console.log(response2))
.catch(err=>console.log(err))

//Zincir Yapıda sadece 1 tane catch kullanabiliriz.Birden çok then kullnabiliriz.(Promise Chain)