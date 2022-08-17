class product{
constructor(NAME,PRICE){
    this.name=NAME;
    this.price=PRICE;
}
addperson(person){
    this.peter=person;

}
}
//const newdata= new product.addperson("peter");

//const first = new newdata("window",1200,"peter")
const newProduct= new product("window",1200);
//const thihs= new newProduct.addperson("peter")
console.log(newProduct);
// console.log("this is data"+ newProduct.addperson());
