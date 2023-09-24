//Immediately Invoked Function Expression (IIFE)

(function hai(){
    //name IIFE
    console.log('DB Connected');
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Santosh')