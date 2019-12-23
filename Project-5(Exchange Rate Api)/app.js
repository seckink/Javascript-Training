//Select Element

const amountElement=document.querySelector("#amount");
const firstSelect=document.getElementById("firstCurrency");
const secondSelect=document.getElementById("secondCurrency");
const currency=new Currency("USD","TRY")

const ui=new UI(firstSelect,secondSelect);

eventListeners();



function eventListeners(){

    amountElement.addEventListener("input",exchangeCurrency);
    firstSelect.onchange=function(){
      currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
      ui.changeFirst();
    };
    secondSelect.onchange=function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    }
}

function exchangeCurrency(){

    currency.changeAmount(amountElement.value);

   //console.log("Event Oluştu..");

   currency.exchange()
   .then(result=>{
       
      //console.log(result)

      ui.displayResult(result);
     

     })
   .catch(err=>console.log(err));
}