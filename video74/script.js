
let button = document.getElementById("btn");

// button.addEventListener("click", () => {
    
//     // alert("Happy Birthday");

//     document.querySelector(".Box").innerHTML = "<h1>Hey You look Sexy.... Follow Me..";
// })

button.addEventListener("dblclick", () => {
    

    document.querySelector(".Box").innerHTML = "<h1>Hey You look Sexy.... Follow Me..";
})

button.addEventListener("contextmenu", () => {
    
    // alert("Happy Birthday");

    alert("My name is Doggy");
})

button.addEventListener("keydown", (e) => {   // here e is called EVENT OBJECT
    
    // alert("Happy Birthday");

    console.log(e);
})