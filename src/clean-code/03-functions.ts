(() => {

    function findMovieById( id: string ) {
        console.log({ id });
    }

  
    function getMovieCastById( id: string ) {
        console.log({ id });
    }
  
    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    
     interface Movie{
        title: string; 
        description: string; 
        rating: number; 
        cast: string[];
    }
    function createMovie( movie:Movie ) {
        console.log(movie);
    }

    // Crea un nuevo actor
      function createNewActor( fullName: string, _birthdate: Date ): boolean {
        
        if ( checkFullname(fullName) ) return false;

        console.log('Crear actor');
        return true;        

    }

    function checkFullname(fullname: string){
        console.log(fullname); 
        return true; 
    }

    


})();





