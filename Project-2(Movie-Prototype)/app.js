const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const cardBody=document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films");


//instance UI

const ui=new UI();

//instance storage

const storage=new Storage();


//Load all events

eventListeners();


function eventListeners(){

 form.addEventListener("submit",addFilm);
 document.addEventListener("DOMContentLoaded",function(){
     let movies=storage.getMoviesFromStorage();
     ui.loadAllMovies(movies);
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
        ui.displayMessages("Please fill all areas","danger");
       
    }
    else{

        const newMovie=new Movie(title,director,url);
        ui.addMovieToUI(newMovie);
        storage.addMovieToStorage(newMovie);
    


        ui.displayMessages("Movie has been added succesfully....","success");

    }

   
     ui.clearInputs(titleElement,directorElement,urlElement);
     

    e.preventDefault();

};

function deleteMovie(e){
  //console.log(e.target);
  if(e.target.id==="delete-film"){
    
     ui.deleteMovieFromUI(e.target);
     storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
     ui.displayMessages("Movie has been deleted successfully","success");
     //console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

  }

}

function clearAllMovies(){

    if(confirm("Are you sure?")){
    ui.clearAllMoviesFromUI();
    storage.clearAllMoviesFromStorage();
}
}