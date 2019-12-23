var bir = document.getElementById("bir");
var iki = document.getElementById("iki");
var uc = document.getElementById("uc");



bir.addEventListener("click", function () {
    alert("Birinci elemana tıkladınız(Yeşil Alan)");
});

iki.addEventListener("click",function(){

    alert("İkinci elemana tıkladınız. (Sarı Alan)");


})

uc.addEventListener("click",function(){

    alert("Üçüncü elemana tıkladınız. (Turuncu Alan)");

})