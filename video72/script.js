console.log("Random color on Boxesss");


let Boxes = document.getElementsByClassName("Box");

console.log(Boxes);

function getrandomcolor() {
    
    let val1 = Math.ceil(0 + Math.random()*255);
    let val2 = Math.ceil(0 + Math.random()*255);
    let val3 = Math.ceil(0 + Math.random()*255);

    return `rgb(${val1},${val2},${val3})`;
}

document.querySelectorAll(".Box").forEach((e) => {
    
    e.style.backgroundColor = getrandomcolor();
    e.style.color = getrandomcolor();
})

