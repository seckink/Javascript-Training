class Request{
 
     constructor(){

        this.xhr=new XMLHttpRequest();
     }

   get(url){
  
      this.xhr.open("GET",url);

      this.xhr.onload=function(){
        
        if(this.xhr.status===200){
            console.log(this);
 
            console.log(this.xhr.responseText);
        }
         
      }

   }

}

const request=new Request();

request.get("https://jsonplaceholder.typicode.com/albums");