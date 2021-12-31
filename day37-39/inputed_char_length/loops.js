for (let i; i < 10; i++){
    console.log(i)
}

// for of
const users = ['Max', 'Anna', 'Joel'];

// every iteration, new valiable
for (const user of users) {
    console.log(user)
}

// for in
const loggedInUser = {
    name: 'Max',
    age: 32,
    isAdmin: true
};

for (const propertyName in loggedInUser){
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
}

// while
let isFinished = false;
while (!isFinished) {
    isFinished = confirm('Do you want to quit?');
}

console.log('Finished');