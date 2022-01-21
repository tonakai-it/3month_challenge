const hobbies = ['Sports', 'Cooking'] // a pointer to the array is store
const age = 32; // the value itself is stored


hobbies.push('Reading') // the address of the array doesn't change

// hobbies = ['Coding', 'Sleeping'] // not allowed! new address is stored

console.log(hobbies) // 

// Primitive values: numbers, strings, booleans & more (undefined) 基本のデータ型
// Reference values: Objects, Array

const person = {age: 32};

function getAdultYears(p) {
    p.age -= 18
    return p.age
}

console.log(getAdultYears({...person}))
console.log(person)