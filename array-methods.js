const products = [
    {name: 'Laptop', price: 32000, brand: 'Lenovo', color:'silver'},
    {name: 'Mobile', price: 7000, brand: 'iphone', color:'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color:'yellow'},
    {name: 'sunglass', price: 300, brand: 'Ray', color:'Black'},
    {name: 'Camera', price: 9000, brand: 'Canon', color:'Gray'}

]

const brands = products.map(product => product.brand);
console.log(brands)
const prices = products.map(product => product.price);
console.log(prices)

products.forEach(product => {
   const brand2 = product.brand; 
   console.log(brand2)

});




// 3. filter

const cheap = products.filter(product => product.price <= 5000);

console.log(cheap)



// 4 find

const spaecial =products.find(product => product.name.includes('L') );

console.log(spaecial, "find Result");
