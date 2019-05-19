var arr = [5,4,3,2,1];
console.log(arr);


arr.reverse();
console.log(arr);


arr_map = arr.map( (elem)=>{
    elem *= elem;
    return elem;
})
console.log('arr_map:', arr_map);

arr_sqrt = arr_map.map( Math.sqrt );
console.log('arr_sqrt:', arr_sqrt);

arr = arr.join('|');
console.log(arr);

arr = arr.split('|');
console.log(arr);

arr.push('6');
console.log(arr);

arr.unshift('0');
console.log('arr:', arr);

console.log( arr.toString() );

var eleminado = arr.pop();
console.log(arr);
console.log(eleminado);

console.log('arr:', arr);   // [ '0', '1', '2', '3', '4', '5' ]
arr.splice(1,3);
console.log(arr);           // [ '0', '4', '5' ]

console.log('arr_map:', arr_map);    // [ 1, 4, 9, 16, 25 ]
arr_map.splice(3,0,10,20,40);
console.log(arr_map);               // [ 1, 4, 9, 10, 20, 40, 16, 25 ]

console.log('arr_sqrt:', arr_sqrt)  // [ 1, 2, 3, 4, 5 ]
arr_sqrt = arr_sqrt.slice(1,3)
console.log(arr_sqrt)               // [ 2, 3 ]
