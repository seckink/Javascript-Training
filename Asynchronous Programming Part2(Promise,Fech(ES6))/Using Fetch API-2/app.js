function getTextFile(){//Local bir txt dosyasından veri alam
  
     fetch("example.txt")
     .then(response=>response.text())
     .then(data=>console.log(data))
     .catch(err=>console.log(err));

}


function getJsonFile(){//Local bir json dosyasından veri alma
  
     fetch("example.json")
     .then(response=>response.json())
     .then(data=>console.log(data))
     .catch(err=>console.log(err));

}

//https://api.exchangeratesapi.io/latest 


function getExternalApi(){
  
     fetch("https://api.exchangeratesapi.io/latest")
     .then(response=>response.json())
     .then(data=>console.log(data.rates.TRY))
     .catch(err=>console.log(err));

}



getTextFile();
getJsonFile();
getExternalApi();
