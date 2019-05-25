function createFunction(){
    var arr = [];
    var number = 1;

    for(var num=0; num < 5; num++ ){
        arr.push(
            (function(number){
                return(function(){ console.log(number) })
            })(num)
        );
    }

    return arr;
}

var functions = createFunction();

functions[0]();
functions[1]();
functions[2]();
functions[3]();
functions[4]();