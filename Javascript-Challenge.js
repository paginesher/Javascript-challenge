//very easy*
var x = 10;
var y = 5;
var z = x - y ;

//easy**
var name = "Pj"
var name2 = "Wendy"
console.log(`The name ${name2} is longer than ${name} by... ${name2.length - name.length} `);

//medium***
let userInput = prompt (" Are you shouting , whispering or talking normal?");
if(userInput === userInput.toUpperCase()){
    console.log("You are shouting!");   
}
else if(userInput === userInput.toLowerCase()){
    console.log(" You are whispering.");
}
else
{
    console.log("You are talking normally");
}
//hard****

//Addition
function add(n1, n2){
    return n1+ n2
}
//subtraction
function subtract (n1, n2) {
    return n1 -n2 
}
//division 
function divide (n1, n2) {
    return n1 / n2
}
//multiplication
function multiply (n1, n2) {
    return n1 /n2
}
//examples:
console.log(add(20, 80), subtract(67, 22), multiply(5, 10), divide(100, 5))

//very hard*****
// take the operator input
const calculator = prompt('Enter Operation +, -, * or /');

const num1 = parseFloat(prompt ('Enter 1st Number'));
const num2 = parseFloat(prompt('Enter 2nd Number '));

let result;

if (calculator == '+'){
    result = num1 + num2;
}

if (calculator == '-'){
    result = num1 - num2;
}

if (calculator == '*'){
    result = num1 * num2;
}

if (calculator == '/'){
    result = num1 / num2;
}

alert(`${num1} ${calculator} ${num2} = ${result}`);
