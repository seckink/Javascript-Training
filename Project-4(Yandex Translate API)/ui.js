function UI(){

    this.outputImage=document.getElementById("outputImage");
    this.outputLangauge=document.getElementById("outputLanguage");
    this.outputWord=document.getElementById("outputWord");

    this.languageList=document.getElementById("language");
}

UI.prototype.changeUI=function(){
    //Arayuz Değiştir.
    this.outputImage.src=`images/${this.languageList.value}.png`;
    this.outputLangauge.innerHTML=this.languageList.options[this.languageList.selectedIndex].textContent;
    //console.log(this.languageList.options[this.languageList.selectedIndex].textContent);
    //console.log(this.languageList.selectedIndex);
}

UI.prototype.displayTranslate=function(word){

  this.outputWord.textContent=word;
}