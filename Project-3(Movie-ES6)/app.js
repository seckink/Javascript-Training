const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const cardBody=document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films");



//Load all events

eventListeners();


function eventListeners(){

 form.addEventListener("submit",addFilm);
 document.addEventListener("DOMContentLoaded",function(){
     let movies=Storage.getMoviesFromStorage();
     UI.loadAllMovies(movies);
 });
 cardBody.addEventListener('click',deleteMovie);
 clear.addEventListener('click',clearAllMovies);
    
}



function addFilm(e){

    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;

    if(title==="" || director==="" || url==="" ){
        //error
        UI.displayMessages("Please fill all areas","danger");
       
    }
    else{

        const newMovie=new Movie(title,director,url);
        UI.addMovieToUI(newMovie);
        Storage.addMovieToStorage(newMovie);
    


        UI.displayMessages("Movie has been added succesfully....","success");

    }

   
     UI.clearInputs(titleElement,directorElement,urlElement);
     

    e.preventDefault();

};

function deleteMovie(e){
  //console.log(e.target);
  if(e.target.id==="delete-film"){
    
     UI.deleteMovieFromUI(e.target);
     Storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
     UI.displayMessages("Movie has been deleted successfully","success");
     //console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

  }

}

function clearAllMovies(){

    if(confirm("Are you sure?")){
    UI.clearAllMoviesFromUI();
    Storage.clearAllMoviesFromStorage();
}
}