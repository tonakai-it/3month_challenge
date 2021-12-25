let age = 26;
let greetingText = "Hi I'm Max!";
alert(greetingText);
greetingText = 'Hi, I am really Max';
alert(greetingText);
alert(age);

let userName = "Max";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
    title: "Developer",
    place: "tokyo",
    salary: 200000
};

let jobTitle = job.title

alert(hobbies[2]);
alert(job.salary);

let totalAdultYears

function calculateAdultYears(userAge) {
    return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);