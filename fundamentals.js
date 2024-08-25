// 1. How to declare a variable using let and const
const fatherName = 'Amar Baper nam';
let season = 'rainy';
season = 'winter';

console.log(fatherName);
console.log(season)

// 2. 6 basic conditions: >, <,  ===, !==, <=, >=, 

// 2 multiple Conditions: ||, $$

if(fatherName === "Amar Baper nam" && season === 'rainy'){
    console.log('here Me')
}else if(season !== 'winter'){
    console.log('this is samar')
}
else{
    console.log('i am not Here')
}

// 3. Array Declare

const myArray = [12, 12, 55, 77, 88, 994, 47, 58, 55];
console.log(myArray);
console.log(myArray.indexOf(47))
myArray[0] = 99; // set index array value

console.log(myArray);
myArray.push(787)
console.log(myArray);

console.log(myArray.length)

// 4. Loop for
for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i])
}
let i2 = 0;
while(i2 < myArray.length){

    i2++;
    console.log(myArray[i2], "this is while loop");
}

// 5. function
function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}

const output = multiply(55, 6);

console.log(output);

console.log(multiply())

// 6. Object
// 3 ways to access property by name

const student = {
    name: 'Sakib khan',
    age: 32,
    moves: ['King khan', 'Dhakar Mastan']
}

const myVariable = 'age';
console.log(student.age)    // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable])
