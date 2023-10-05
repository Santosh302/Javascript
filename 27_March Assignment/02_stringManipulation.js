function manipulationString(inputString ,callback){
    const manipulatedString = inputString.toUpperCase();
    callback(manipulatedString);
}
        function logString(manipulatedString){
             console.log(`The manipulated string is: ${manipulatedString}`);
       
        }
        
manipulationString("hello, world !", logString);
