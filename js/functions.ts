// Variable Declaration Types
var varVariable: string = "var-variable";
let letVariable: string = "let-variable"
const constVariable: string = "const-variable"

// Named function
function myFunction(someVar: string) {
    console.log("Somefunk printed: " + someVar)
}

// Lambda function
const somefunk = (someVar: string) => {
    console.log("Somefunk printed: " + someVar)
}

const someSimpleFunk = () => "k";

// objects
type Jose = {analEndurance: number, dickSuckingCap: number, arosal: number}
const jose: Jose = {
    analEndurance: 10,
    dickSuckingCap: 100,
    arosal: 10,
}
function evalGayness(aJose: Jose): boolean {
    const gayThreshold = 100;
    let gayLevel = 0;
    gayLevel = aJose.analEndurance + aJose.dickSuckingCap + aJose.arosal
    return gayLevel > gayThreshold
}

console.log("Is Jose Gay? " + evalGayness(jose));

function cleanString(str: string): string {
    return str.trim(); //"    fjdslkfajl        " | "fjdslkfajl"
}

function makeElement(str: string): string {
    return `<${str}></${str}>`;
}

let someString = "   table    "
const eleMaker = (str: string) => makeElement(cleanString(str));
const ele = eleMaker(someString);
console.log(ele);