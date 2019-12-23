class Storage{
   static addMovieToStorage(newMovie){
        //console.log(newMovie);
        let movies=this.getMoviesFromStorage();
    
        movies.push(newMovie);
    
        localStorage.setItem("movies",JSON.stringify(movies));
        
        
    }
    
  static getMoviesFromStorage(){
        let movies;
    
        if(localStorage.getItem("movies") === null){
               movies=[];
        }
        else{
    
            movies=JSON.parse(localStorage.getItem("movies"));
        }
    
        return movies;
    
    }
    
    static deleteMovieFromStorage(filmTitle){
      let movies=this.getMoviesFromStorage();
      movies.forEach(function(movie,index){
          if(movie.title===filmTitle){
              movies.splice(index,1);
          }
      });
    
      movies.setItem("movies",JSON.stringify(movies));
    }
    
   static clearAllMoviesFromStorage(){
        localStorage.removeItem("movies");
    }
}

