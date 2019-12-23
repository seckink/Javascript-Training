//Ajax,callback http requests

class Request{

     constructor(){
       this.xhr=new XMLHttpRequest();
     }

     get(url,callback){
  
         this.xhr.open("GET",url);
        // 1.
        // const temp=this;

        //2.
        //  this.xhr.onload=function(){

        //     //console.log(this);
        //     //  if(this.xhr.status===200){
        //     //      console.log(this.xhr.responseText);
        //     //  }

        //       if(this.status===200){
        //           console.log(this.responseText);
        //       }
        //  }

        //3.

        // this.xhr.onload=function(){
             // console.log(this);
        //     if(this.xhr.status===200){
        //           console.log(this.xhr.responseText);
        //       }
        //  }.bind(this);

        //4.
          this.xhr.onload=()=>{
             // console.log(this);
            if(this.xhr.status===200){
                  //console.log(this.xhr.responseText);
                  callback(null,this.xhr.responseText);
              }
              else{

                   callback("Get Request:Something went wrong...",null)

              }
         }
 

         this.xhr.send();

    

     }

     post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json");
        this.xhr.onload=()=>{
          if(this.xhr.status===201){
            //success state
            callback(null,this.xhr.responseText)
          }
          else{
            callback("Post Request:Something went wrong...",null);
          }
        }

        this.xhr.send(JSON.stringify(data));
     }

     put(url,data,callback){
      this.xhr.open("PUT",url);
      this.xhr.setRequestHeader("Content-type","application/json");
      this.xhr.onload=()=>{
        if(this.xhr.status===200){
          //success state
          callback(null,this.xhr.responseText)
        }
        else{
          callback("Put Request:Something went wrong...",null);
        }
      }

      this.xhr.send(JSON.stringify(data));
   }

   
   delete(url,callback){
  
    this.xhr.open("DELETE",url);

     this.xhr.onload=()=>{
        // console.log(this);
       if(this.xhr.status===200){
             //console.log(this.xhr.responseText);
            callback(null,this.xhr.responseText);
           // callback(null,"Deleted...");
         }
         else{

              callback("Delete Request:Something went wrong...",null)

         }
    }


    this.xhr.send();



}
  
}

const request=new Request();
// request.get("https://jsonplaceholder.typicode.com/posts",function(err,response){
  
//   //console.log(response);

//   if(err===null){
    
//      console.log(response);

//   }
//   else{
     
//     console.log(err);

//   }

// });

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"},function(err,album){
//     if(err===null){
 
//         console.log(album);

//     }else{
//       console.log(err);
//     }
// });


// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:143,title:"Zızı"},function(err,album){
//     if(err===null){
 
//         console.log(album);

//     }else{
//       console.log(err);
//     }
// });



request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,album){
    if(err===null){
 
        console.log(album);

    }else{
      console.log(err);
    }
});