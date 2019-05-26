var a = new String("Software my friend");
console.log('a:', a);

var b = "Hardware";
console.log('b:', b);

console.log(a.toUpperCase())
console.log(a.toLowerCase())

console.log(a.indexOf("f"))
console.log(a.lastIndexOf("e"))

var name = a.substr(0, a.indexOf(" "));
console.log('name:', name);

var splited = a.split(" ");
console.log('splited:', splited);

