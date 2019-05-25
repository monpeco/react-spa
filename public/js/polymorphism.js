function determinateType(data){
    if(typeof data === 'undefined'){
        console.log('data is undefined:', data)
    }
    if(typeof data === 'number'){
        console.log('data is a number:', data)
    }
    if(typeof data === 'string'){
        console.log('data is a string:', data)
    }
    if(typeof data === 'object'){
        console.log('data is a object:', data)
        if(data instanceof Number){
            console.log('and also a instance of Number:')
        }
    }
}

determinateType();
determinateType(42);
determinateType("my string");
determinateType({b:42});

//special care with this
var c = new Number(3);
console.log('[DEBUG] c:', c)
determinateType(c);
