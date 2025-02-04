// document.querySelector(".Box").innerHTML
// ' Hey I am a Good Boy.. '
// document.querySelector(".container").innerHTML
// '\n\n        <div class="Box"> Hey I am a Good Boy.. </div>\n\n\n    '
// document.querySelector(".container").innerText
// 'Hey I am a Good Boy..'
// document.querySelector(".Box").innerText
// 'Hey I am a Good Boy..'

// document.querySelector(".container").outerHTML
// '<div class="container">\n\n        <div class="Box"> Hey I am a Good Boy.. </div>\n        <div class="Box"> Hey I am a Student.. </div>\n\n    </div>'
// document.querySelector(".container").outerText
// 'Hey I am a Good Boy..\nHey I am a Student..'

// document.querySelector(".container").tagName
// 'DIV'

// document.querySelector(".container").nodeName
// 'DIV

// document.querySelector(".container").hidden
// false

// document.querySelector(".container").hidden = true
// true   // it will add hidden in the attribute in the div container

// document.querySelector(".Box").innerHTML = "hey i am poor"
// 'hey i am poor' // basically it will change the text content

// document.querySelector(".Box").hasAttribute("style")
// true
// document.querySelector(".Box").hasAttribute("style")
// true
// document.querySelector(".Box").getAttribute("style")
// 'display: flex;'
// document.querySelector(".Box").setAttribute("style",displ
// VM591:1 Uncaught SyntaxError: missing ) after argument listUnderstand this errorAI
// document.querySelector(".Box").setAttribute("style","display: inline")
// undefined    // it will the set the display : INLINE

// document.querySelector(".Box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}
// document.querySelector(".Box").removeAttribute("style")
// undefined // it will remove the style attribute


let div = document.createElement("div");
div.innerHTML = "Hey my name is Vikas Singh";
div.setAttribute("class", "Aman");
document.querySelector(".container").append(div);     // INSERTION OF AN ELEMENT USING JAVASCRIPT

document.querySelector(".container").before(div);    // IT WILL INSEET BEFORE CONTAINER


// ANOTHER METHOD OF INSERTING ELEMENTS

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterend", "<h1>PLEASE HELP ME...</h1>");