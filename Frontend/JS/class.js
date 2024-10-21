function numberAdder (a,b) {
    return (a+b);
}
console.log(numberAdder(6,100));

function multiplyNumberAdder (...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(multiplyNumberAdder(6,100, 50, 100));
 
let students = ["kimi", "victor", "ella", "precious", "jomi"]
console.log

const userName ="princesss taraba";

const firstName = username.split('') [0];

const lastName = username. split('')[0];

const initials = `${firstname[0].toUpperCase()}${lastName[0].toUppercase()}`;

console.log('firstname:',firstname)
console.log( 'lastname:', lastname)
console.log('initials:', initials)

const mynav = document.getElementById('myNav');
const opennav =