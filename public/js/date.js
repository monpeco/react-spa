var today = new Date();
console.log('today:\t\t', today);

var date_mili = new Date(0);
console.log('date_mili:\t', date_mili);

var date_fix = new Date(2019, 10, 15);
console.log('date_fix:\t', date_fix);

console.log('today\'s year:', today.getFullYear());
console.log('today\'s day:', today.getDate());
console.log('today\'s month:', today.getMonth());
console.log('today\'s count (ms):', today.getMilliseconds());

//https://momentjs.com/

