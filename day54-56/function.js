function greetUser(greetingPrefix, userName="user") {
    console.log(greetingPrefix + ' ' +  userName + "!")
    console.log(`Hi ${greetUser} there`)
}

greetUser('Hi', "max");
greetUser("Hi");

// レストパラメーター 可変長引数
function sumUp(...numbers) {
    let result = 0
    result = numbers.reduce((previousValue, currentValue)=>previousValue + currentValue)    
    return result
}

const inputNumberts = [1,3,5,20,31]

// console.log(sumUp(1, 5, 10, 11, 5, 7, 12))
// スプレッド構文
console.log(sumUp(...inputNumberts))

console.log(sumUp)