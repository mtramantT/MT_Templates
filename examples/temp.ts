// export default {aVar: "dflkjasl;fsdajfl;asdj;lfa"};

// Types and Stuff

// string, number, boolean || These are not the same as String, Number, Boolean
// strings are any text
// numbers are any number including decimals
// boolean is either true or false

// functions
// Functions can be stored within variables and then called later. 
// classic def:
function aFunk1(parm1: string) {
    return parm1;
}
// Lambda def:
const aVar1 = (parm1: string) => {
    parm1 = "Hello " + parm1;
    return parm1
}
// Lambda shorthand
const aVar2 = (parm1: string) => "Hello " + parm1;

// Objects
// {}
// properties and methods
// Paradigm called Object Oriented Programming (OOP)
// Abstraction, Encapsulation, inheritance, polymorphism
// Abstraction - Hides functionality from the user
// Encapsulation - group things together
// inheritance - Children of a class. Passing properties and methods down to children.
// Polymorphism - Mostly refers to typing and transforming objects into other types.


type Person = {
    hairColor: string,
    height: number,
    IQ: number,
    complain: (topic: string) => string
}

const person: Person = {
    hairColor: "brown",
    height: 5.10,
    IQ: 60,
    complain: (topic: string) => `This ${topic} sucks`,
}
const person2: Person = {
    hairColor: "blonde",
    height: 3.6,
    IQ: 180,
    complain: (topic: string) => `I have no complaints about ${topic}`
}

const doILikeJose = (person: Person): boolean => {
    console.log(person.hairColor);
    console.log(person.complain('jose'));
    return true;
}

export default person;