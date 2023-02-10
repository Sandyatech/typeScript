const people = ["Harry", "Hermione", "Ron"];

function logPerson(person:string) {
    console.log("The person is " + person);
}

people.forEach(logPerson);


const performLogPerson = function logPerson(person:string) { console.log("The person is " + person); };


const arrowVersionOfLogPerson = (person:string):void => { console.log("The person is " + person); };


people.forEach(person => { console.log("The person is " + person); });

