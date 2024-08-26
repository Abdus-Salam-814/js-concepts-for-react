// 1. array destructuring
const numbers = [42, 65];

const x = numbers[0];
const y = numbers[1];

console.log(x, y, "this is array destruing 1");

const [x1, y1] = [42, 65];

console.log(x1, y1, "this is array destruing 2");

const [x2, y2] = numbers;
function boxify(num1, num2){
    const nums = [ num1, num2];

    return nums;
}

const [first, secound] = boxify(90, 34);

console.log(boxify(90, 34));


const student = {
    name: 'Sakib Khan',
    age: 32,
    moves: ['King Khan', 'Dhakar Mastan']


}

const [firstMovie, secoundMovie] = student.moves;

console.log(firstMovie);
console.log(secoundMovie);
const movieMakeArray = boxify(firstMovie, secoundMovie);
console.log(movieMakeArray);


//  Object destructuring
const {name, age} = {name: 'Alu Ali', age: 14};
console.log(name);
console.log(age);
const makeObjectToArray = boxify(name, age);
console.log(makeObjectToArray);


const employee = {
    ide: 'VS Code',
    designation: 'devoloper',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch:{
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const {machine, ide} = employee;

console.log(machine, ide);

const {brand} = employee?.specification?.watch;
console.log(brand);