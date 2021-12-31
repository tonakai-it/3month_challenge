/** control structure => 制御構文 */
const myName = 'Annie';

if (myName && myName==='Max') {
    console.log('Hello!' + 'Max');
} else {
    console.log('Hi!')
}

switch (myName) {
    case 'Max':
        console.log('Hello!Max')
        break;
    default:
        console.log('Hi!')
        break;
}

// flag
let isLoggedIn = true;

if (!isLoggedIn) {
    console.log('User is not logged in!')
}

// truthy or falsy
const enteredUserName = 'Max';
if (!enteredUserName) {  // falsy "" 0 NaN null =>false  (enteredUserName.length === 0) => (enteredUserName === "") => !enteredUserName
    console.log('Inut is valid')
}

// loop