//1.

// async function test(data){
//     //return new Promise
//    // return data;
// //    return new Promise((resolve,reject)=>{
// //        resolve(data);
// //    });
 
//  let promise=new Promise((resolve,reject)=>{
//    setTimeout(() => {
//        resolve("Bu bir değerdir");
//    }, 5000);
//  })

//  let response=await promise;//5 saniye bekler.Promise'in resolve olmasını bekler.

 
// console.log(response);
// console.log("nbr");


// }

// test("Merhaba")

// //console.log(test("Merhaba"));

// //await:promise'in resolve olmasını bekler.

// //test("Merhaba").then(response=>console.log(response));

//2.

// async function testData(data){
//     let promise =new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(typeof data==="string"){
//                 resolve(data);
//             }else{
//                 reject(new Error("Lütfen string bir değer girin"));
//             }
            
//         }, 5000);
//     })

//     const response=await promise;

//     return response;
// }


// testData("Seckin")
// .then(data=>console.log(data))
// .catch(err=>console.log(err));

//3.


async function getCurrency(url){

     const response=await fetch(url);//Response Object

     console.log(response);

     const data=await response.json();

     //console.log(data);

     return data;
}

getCurrency("https://api.exchangeratesapi.io/latest")
.then(response=>console.log(response));