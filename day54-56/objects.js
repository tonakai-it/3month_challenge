const job = {
    title:"Developer",
    location:"New York",
    salary:50000,
}

console.log(new Date().toISOString())

class Job {
    constructor(jobTitle, place, salary) {
        this.title = jobTitle,
        this.location = place,
        this.salary = salary
    }
    describe() {
        console.log(`I'm a ${this.title},I work in ${this.location} and I earn ${this.salary}`)
    }
}

const developer = new Job("Developer", "New York", 50000)
const cook = new Job("Cook", "Hawaii", 65000)

developer.describe()
cook.describe()

const {title, location} = developer
console.log(title, location)
const { salary:unchi } = developer
console.log(unchi)