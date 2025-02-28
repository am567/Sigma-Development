console.log("Faulty Calculator");

let random = Math.random();

console.log(random);

let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");

let c = prompt("Enter the operator: ");

let obj = {
  "+": "-", // if the result is true then it will use + operator but if false it will use - operator(when random is less than 0.1)..
  "-": "/",
  "*": "+",
  "/": "**",
};

if (random > 0.1) {
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
  console.log(`The result is ${a} ${c} ${b}`);
} else {
  c = obj[c];
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}

// here we are dealing with Application Programming Interface
// here we are dealing with API(Application Programming Interface ) which is a set of rules and protocols that allows one software application to communicate with another software application.
