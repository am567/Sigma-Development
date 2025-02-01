console.log("Hey Aman you are a good boy");
console.log("Hey Aman you are a good");
console.log("Hey Aman you are a foolish man");
console.log("Hey Aman you are a dumb person");
console.log("Hey Aman you are a sexy one ");

function nice(name) {
    
    console.log("hey " + name + " you are a good boy");
    console.log("hey " + name + " you are a good");
    console.log("hey " + name + " you are a foolish man");
    console.log("hey " + name + " you are a dumb person");
    console.log("hey " + name + " you are a sexy one");
}

nice("Rohan");

function sum(a, b, c = 8) {   // optional parameter c = 8
    
    // console.log(a + b);
    return a + b + c;

}

result = sum(4, 5);

console.log("The sum of two numbers are: " + result);


const func = (x) => {

    console.log("I am a arrow function " , x);

}

func(5);
