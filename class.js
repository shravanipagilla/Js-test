class product{
constructor(name,price){
    this.name=name;
    this.price=price;
}
logProduct(){
    return this.name + ' is ' +  this.price +' kr '
}
}
const newProduct= new product("window",1200);

const renderProduct = newProduct.logProduct()

console.log('renderProduct: ', renderProduct)

