function createFunction(){
    var arr = [];
    var number = 1;

    arr.push( 
        (function(number){
            return function(){
                console.log(number);
            }
        })(number) // create a new context
    );

    number = 2;
    
    arr.push( function(){
        console.log(number);
    } );
    number = 3;

    arr.push( function(){
        console.log(number);
    } );


    return arr;
}

var functions = createFunction();

functions[0]();
functions[1]();
functions[2]();