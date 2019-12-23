//Http Status
/*
200:OK
403:Forbidden
404:Not Found
505:Internal Server Error
*/

/*
Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready


*/

document.getElementById("btn").addEventListener("click",function(){

  //XMLHttpRequest

  var xhr=new XMLHttpRequest();
   //console.log(xhr);


   //First Way

//    xhr.onreadystatechange=function(){
//        //console.log(this.readyState);
//       //console.log(this.status);

//       if (this.status==200  && this.readyState==4){
    
//          console.log(this.responseText);
//       }

//    }

//Second Way



xhr.onprogress=function(){

    console.log("Processing...",this.readyState);
}

xhr.onload=function(){

    if (this.status==200){

        console.log(this.responseText,this.readyState);
        document.getElementById("output").innerHTML=this.responseText;
    }

}

  xhr.open("GET","examples.txt",true);
  xhr.send();

 

});