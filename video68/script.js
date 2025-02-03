console.log("Aman Maurya");

// let Boxes = document.getElementsByClassName("Box");

// console.log(Boxes);

// Boxes[2].style.color = "red";
// Boxes[2].style.backgroundColor = "blue";

document.getElementById("redbox").style.color = "red";
document.getElementById("redbox").style.backgroundColor = "blue";


document.querySelector(".Box").style.backgroundColor = "purple";   // here we have used inliine css so it will override the css of the class and it will we applied on the first element only..


// now if we want to make all elements background color to purple then we have to use for loop

document.querySelectorAll(".Box").forEach((e) => {    // here we are using forEach loop to apply the css on all elements and it will override above id css
    e.style.backgroundColor = "purple";
    
})

