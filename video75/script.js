console.log("Aman Maurya is a Hacker")
console.log("Kashish is a Hecker")


setTimeout(() => {     // It is an asynchronous function

    console.log("I am done..so Please wait for me to start");   // it will take 4s to execute 
    
}, 0);


console.log("The End");


// CALLBACK FUNCTIONS

const callback = (arg) => {                   // yha pe bi hm dusra fn call kr skte h arg, krke

    console.log(arg);
}

const loadScript = (src,callback) => {        // callback ke andr callback 

    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = () => callback("Aman");
    document.head.append(sc)
 
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);
