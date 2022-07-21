(() => {

 
    const celsiusTemperatures: Array<number> = [33.6, 12.34];

    
    const serverIp: string = '123.123.123.123';

    
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

  
    const usersEmails: Array<string> = users.map( user => user.email );

    
    const canJump: boolean = false;
    const canRun: boolean = true;
    const canHaveItems: boolean = false;
    const isLoading: boolean = true;

    
    const startTime = new Date().getTime();
   
    const endTime = new Date().getTime() - startTime;


    // Funciones
  
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    
    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    function getSquareArea( side: number ):number {
        throw new Error('Function not implemented.');
    }

   
    function printJob() {
        throw new Error('Function not implemented.');
    }
    
    




})();