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