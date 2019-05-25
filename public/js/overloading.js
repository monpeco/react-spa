function createProduct(name, price){
    name = name || "no name"
    price = price || 0
    console.log('name: ', name, ', price: ', price)
}

function createProduct100(name){
    createProduct(name, 100);
}

function createProductScreen(price){
    createProduct('Screen', price);
}

createProduct();
createProduct100("Keyboard");
createProductScreen(8);