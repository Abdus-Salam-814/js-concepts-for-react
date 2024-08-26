// 1. JSON => stringify, parse

const student = {
    name: 'salib khan',
    age: 32,
    moves: ['king khan', 'Dhakar Mastan']
}

const studentJSON = JSON.stringify(student);

console.log(student);
console.log(studentJSON)

const studentObject = JSON.parse(studentJSON);
console.log(studentObject);

// 2. fetch
// const res =  fetch('https://jsonplaceholder.typicode.com/photos')

// .then(res => res.JSON())
// .then(data = console.log(data))

const loadData = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');

    const data = await res.json();
    const image = data;
    data.forEach(element => {
        // console.log(element);
        const body = document.getElementsByTagName('body');
    
        const div = document.createElement('div');
       
    
        div.innerHTML = `
    
        
        <h1>Title:${element.title}</h1>
    <img src="${element.url}" alt="">
        
        
        
        `;
    
        document.body.appendChild(div);
    
    
    });

 
    
}
loadData()

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys, values)

// for
keys.forEach(key => console.log(key, "This is key"))
values.forEach(value => console.log(value, "this is value"))



// add or remove an array
const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

console.log(products)
// copy products array and then and newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);

//create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);