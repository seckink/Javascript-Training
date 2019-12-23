document.getElementById("change").addEventListener("click",change);

function change(){

    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.exchangeratesapi.io/latest");
    xhr.onload=function(){
        if (this.status==200){
           const response=JSON.parse(this.responseText);
           //console.log(this.responseText); 
           const rate=response.rates.TRY;
           const amount=Number(document.getElementById("amount").value);
           document.getElementById("tl").value=rate * amount;
           //console.log(response.rates.TRY);
        }
    }
    xhr.send();

}