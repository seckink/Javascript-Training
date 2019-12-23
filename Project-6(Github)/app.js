///Elementleri Seçme

const githubForm=document.getElementById("github-form");
const nameInput=document.getElementById("githubname");
const clearLastUsers=document.getElementById("clear-last-users");
const lastUsers=document.getElementById("last-users");

const github=new Github();


eventListeners();


function eventListeners(){

     githubForm.addEventListener("submit",getData);
     clearLastUsers.addEventListener("click",clearAllSearched);
     document.addEventListener("DOMContentLoaded",getAllSearched);

}

function getData(e){

     let userName=nameInput.value.trim();

     if (userName===""){
 
         alert("Lütfen geçerli bir kullanıcı adı girin");

     }
     else{
       github.getGithubData(userName)
       .then(response=>{
           if(response.user.message="Not Found"){
              console.log("Hata");

           }else{

              console.log(response)

           }
       })
       .catch(err=>console.log(err));
     }

    e.preventDefault;
}


function clearAllSearched(){

    //Tüm Arananları temizle


}


function getAllSearched(){

    //Arananları Storegedan al,UI'a ekle

    

}