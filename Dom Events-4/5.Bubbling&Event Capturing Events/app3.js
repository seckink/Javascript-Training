function Yukle(){
         
    var divList=document.getElementsByTagName("div");
    for(var i=0;i<divList.length;i++){
        divList[i].addEventListener("click",function(e){

           alert(e.currentTarget.id);
           e.currentTarget.style.background="red";
        });
    }

  }