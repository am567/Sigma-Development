console.log(" ERROR HANDLING");

let a = prompt("Enter a number"); // it gives us STRING

let b = prompt("Enter a number");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError(" this is not allowed");
}

let sum = parseInt(a) + parseInt(b);

// console.log("sum of two numbers is : ", sum * x); // it is showing 458 because a and b are string so it is appending it

// *x i showing in the console that x is not defined

function main(params) {
  let x = 3;
  try {
    console.log("sum of two numbers is : ", sum * x);
    return true;
  } catch (error) {
    console.log("ERROR AA GYA BHAI BHT BADA VLA ");
    return false;
  } finally {
    // function me agr finally likha h to return ke bd bi apka code chl jayega
    console.log("My name is Aman Maurya");
  }
}

main();
