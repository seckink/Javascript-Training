class Request{
  
   async get(url){//get Request
       
    //    return new Promise((resolve,reject)=>{
    //        fetch(url)
    //        .then(response=>response.json())
    //        .then(data=>resolve(data))
    //        .catch(err=>reject(err))
   

    //    })


       const response=await fetch(url);//response object

       const responseData=response.json();//Json Object

    
       return responseData;
    }


    async post(url,data){

    //    return new Promise((resolve,reject)=>{

    //      fetch(url, {
    //        method: 'POST',
    //        body: JSON.stringify(data),
    //        headers: {
    //          "Content-type": "application/json; charset=UTF-8"
    //        }
    //      })
    //      .then(response=>response.json())
    //      .then(data=>resolve(data))
    //      .catch(err=>reject(err))
    //    })

      const response=await  fetch(url, {
               method: 'POST',
               body: JSON.stringify(data),
               headers: {
                 "Content-type": "application/json; charset=UTF-8"
               }
             });//Response Object

             const responseData= await response.json();//json object

             return responseData
      
        
    }

   async put(url,data){

    //  return new Promise((resolve,reject)=>{

    //    fetch(url,{
    //      method: 'PUT',
    //      body: JSON.stringify(data),
    //      headers: {
    //        "Content-type": "application/json; charset=UTF-8"
    //      }
    //    })
    //    .then(response=>response.json())
    //    .then(data=>resolve(data))
    //    .catch(err=>reject(err));
    //  })

      const response= await  fetch(url,{
           method: 'PUT',
           body: JSON.stringify(data),
           headers: {
             "Content-type": "application/json; charset=UTF-8"
           }
         })//Response Object

         const responseData= await response.json();//json object

         return responseData;

   
    }

   async delete(url){

    //  return new Promise((resolve,reject)=>{

    //    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //      method: 'DELETE'
    //    })
    //    .then(response=>resolve("Veri silme işlemi başarılı"))
    //      .catch(err=>reject(err));
    //  })

    const response=await  fetch('https://jsonplaceholder.typicode.com/posts/1', {
             method: 'DELETE'
           }) ;//response object

   // const data=await response.json();

   // return data;

     return "Veri Silme İşlemi başarılı";
   
    }

    
}

const request =new Request();

//let albums;

request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums=>{
   console.log(albums);
})
.catch(err => console.log(err));


console.log(albums);


// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Traveller"})
// .then(newAlbum =>console.log(newAlbum))
// .catch(err=>console.log(err));



// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"Micheal Jackson"})
// .then(album =>console.log(album))
// .catch(err=>console.log(err));

// request.delete("https://jsonplaceholder.typicode.com/albums/1")
// .then(message =>console.log(message))
// .catch(err=>console.log(err));