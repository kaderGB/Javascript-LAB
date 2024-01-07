//Object destructuring
const Obj = {
    name:"kader",
    IsPerson:true,
    age:28
}

const {name} = Obj;
console.log (name);


//Object destructuring & rest operator
const {a,b, ...rest} = {a:"kader",b:"karim",c:"jimmy",d:"kabirou"};
console.log(rest);


const person={
    name:"kader",
    age:12,
    gender:"M",
    country:"Niger"
}

const {name:personName,age:personAge,country:personCountry } = person;

console.log(personName);
console.log(personAge);
console.log(personCountry);
