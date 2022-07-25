(() => {
  
  // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
         
        //Everything resumed to two lines because using array.include makes it extremely efficient.
        const redFruits: string[] = ['manzana','cereza','ciruela']
        return redFruits.includes(fruit); 

        // MY SOLUTION, which is not very escalable, must I say. 
        // let result = false;
        //  fruit === 'manzana'? result =  true:undefined ; 
        //  fruit === 'cereza'? result =  true:undefined ; 
        //  fruit === 'ciruela'? result =  true:undefined ; 
        //  return result; 

        // ORIGINAL EXERCISE
        // if ( fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela' ) {
        //     return true;
        // } else {
        //     return false;
        // }
    }
       
    
    type FruitColour = 'red'|'yellow'|'purple';
    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor( colour: string ): string[] {
        //Ah... Ok. This makes sense
        const fruits:  { [key: string]: string[] } = {
            red:     ['manzana' ,'fresa'],
            yellow:  ['piña' ,'banana'],
            purple:  ['moras' ,'uvas'],
        }
        /**
        *
        *Search in the object if the keys of the array include what we are looking for. In this case a string. 
        *Wait, WHAT? 
        */
        if (!Object.keys(getFruitsByColor).includes(colour)) 
        throw Error('the color must be: red, yellow, purple')
        return fruits[colour];
        
        //ORIGINAL EXERCISE
        // if ( color === 'red' ) {
        //     return ['manzana','fresa'];
        // } else if ( color === 'yellow') {
        //     return ['piña','banana'];
        // } else if ( color === 'purple') {
        //     return ['moras','uvas']
        // } else {
        //     throw Error('the color must be: red, yellow, purple');
        // }
    }


    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        function workingSteps(): string {
            if (!isFirstStepWorking) return 'First step broken.'
            if (!isSecondStepWorking) return 'Second step broken.'
            if (!isThirdStepWorking) return 'Third step broken.'
            if (!isFourthStepWorking) return 'Fourth step broken.'
         
            return 'Working properly!'

        //ORIGINAL EXERCISE
        // if( isFirstStepWorking === true ) {
        //     if( isSecondStepWorking === true ) {
        //         if( isThirdStepWorking === true ) {
        //             if( isFourthStepWorking === true ) {
        //                 return 'Working properly!';
        //             }
        //             else {
        //                 return 'Fourth step broken.';
        //             }
        //         }
        //         else {
        //             return 'Third step broken.';
        //         }
        //     }
        //     else {
        //         return 'Second step broken.';
        //     }
        // }
        // else {
        //     return 'First step broken.';
        // }
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


    }
})();
