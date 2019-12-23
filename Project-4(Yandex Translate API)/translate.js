function Translate(word,language){

     this.apikey="trnsl.1.1.20191121T193353Z.b182ef20f381e2da.9a0cf10834d84b80751b318c99eddd125677876e";
     this.word=word;
     this.language=language;

     //XHR object

     this.xhr=new XMLHttpRequest();


}


Translate.prototype.translateWord=function(callback){
//Ajax İşlemleri

const endpoint=`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

this.xhr.open("GET",endpoint);

this.xhr.onload=()=>{
    if(this.xhr.status===200){

        const json=JSON.parse(this.xhr.responseText);
        const text=json.text[0];
       //console.log(text);
      //  console.log(JSON.parse(this.xhr.responseText).text[0]);
       callback(null,text);
       
    }else{
        //console.log("Hata..");
        callback("Something went wrong",null)

    }
}

this.xhr.send();

}

Translate.prototype.changeParameters=function(newWord,newLanguage){
    this.word=newWord;
    this.language=newLanguage;


}


