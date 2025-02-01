console.log("Faulty Calculator");


let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");

let c = prompt("Enter the operator: ");

function faultycalculator(a, b, operator) {
    
    let correctanswer;

    switch (operator) {
        
        case '+':
            correctanswer = a + b;
            break;
        
        case '-':
            correctanswer = a - b;
            break;
        
        case '*':
            correctanswer = a * b;
            break;
        
        case '/':
            correctanswer = a / b;
            break;
        
        default:
            console.log("Enter a valid operator");
            break;
    }

    
}