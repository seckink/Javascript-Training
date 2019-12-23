//prototype,ajax,callback

eventListeners();

function eventListeners(){

     document.getElementById("translate-form").addEventListener("submit",translateWord);
     //change
     document.getElementById("language").onchange=function(){
         //Arayüz işlemleri
         console.log("event");
          ui.changeUI();
     }
}

const translate=new Translate(document.getElementById("word").value,document.getElementById("language").value);

const ui=new UI();

function translateWord(e){

translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);
translate.translateWord(function(err,response){

    if(err){

        console.log(err);
    }else{
  
         // console.log(response);
         ui.displayTranslate(response);

    }

});

  e.preventDefault();
}