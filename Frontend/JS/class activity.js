const employees = [
    {
        name : "Favour",
        age : 33,
        department :"cyber security",
        position : "senior staff",
        bloodgroup : "0",
        permanentStaff : true,

    },
    {
        name : "jennifer",
        age : 28,
        department : "technical",
        position : "junior Staff",
        bloodgroup : "B",
        permanentStaff : false,
    },
    
    {
        name : "brenda",  
        age : 20,
        department : "med-lab",
        position : "senior-staff",
        bloodgroup : "0",
        permanentStaff : false,
    },
    {
        name : "audrey",
        age : 23,
        department : "photography",
        position : "seniorstaff",
        bloodgroup : "0",
        permanentStaff : true,
    },
    {
        name : "chioma",
        age : 24,
        department : "microbiology",
        position : "junior Staff",
        bloodgroup : "0",
        permanentStaff : false,
    },
    {
        name : "chinaza",
        age : 19,
        department : "accountant",
        position : "juniorStaff",
        bloodgroup : "0",
        permanentStaff : false,
    },
    {
        name : "roseline",
        age : 20,
        department : "masscom",
        position : "senior Staff",
        bloodgroup : "B",
        permanentStaff : true,
    },
    {
        name : "mirabel",
        age : 18,
        department : "computer Science",
        position : "junior Staff",
        bloodgroup : "0",
        permanentStaff : false,
    }, 
    {
        name : "sapele",
        age : 45,
        department : "law",
        position : "senior Staff",
        bloodgroup : "0",
        permanentStaff : true,
    },
    {
        name : "partner",
        age : 23,
        department : "biochemistry",
        position : "junior Staff",
        bloodgroup : "B",
        permanentStaff : false,
    },

];

//correct this
// let showLastfirst = employees.splice(1,9);

let firstEmployee = employees[0];

let lastEmployee = employees[employees.length - 1 ];

const newEmployee = {
    name : "princess",
    age : 79,
    department : "nursing",
    position : "senior Staff",
    bloodgroup : "0",
    permanentStaff : false,
};

let updateEmployee = employees.push(newEmployee);

console.log("Employees:", employees);
console.log("length:", employees.length);
console.log("first guy:", firstEmployee);
console.log("last guy:", lastEmployee);

    
    