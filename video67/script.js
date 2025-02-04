console.log("My name is aman maurya");


//  My name is aman maurya
// document.body
// <body>​<div class=​"container">​<div class=​"Box">​Box 1​</div>​<div class=​"Box">​Box 2​</div>​<div class=​"Box">​Box 3​</div>​<div class=​"Box">​Box 4​</div>​<div class=​"Box">​Box 5​</div>​<!-- now i want to make background color change we can achieve this using javascript also...--></div>​<script src=​"script.js">​ ​</script>​<!-- Code injected by live-server --><script>​…​</script>​<div id=​"loom-companion-mv3" ext-id=​"liecbddmkiiihnedobmlmillhodjkdmb">​…​</div>​</body>​
// document.childNodes
// NodeList(2) [<!DOCTYPE html>, html]0: <!DOCTYPE html>1: htmllength: 2[[Prototype]]: NodeList
// NodeList(10) [text, div.container, text, script, text, comment, text, script, text, div#loom-companion-mv3]0: text1: div.container2: text3: script4: text5: comment6: text7: script8: text9: div#loom-companion-mv3length: 10[[Prototype]]: NodeList
// document.body.childNodes
// document.body.childNodes[0]
// #text
// document.body.childNodes[1]
// <div class=​"container">​…​</div>​
// document.body.childNodes[1].childNodes
// NodeList(13) [text, div.Box, text, div.Box, text, div.Box, text, div.Box, text, div.Box, text, comment, text]
// let cont = document.body.childNodes[1]
// undefined
// cont
// <div class=​"container">​…​</div>​
// cont.firstchild
// undefined
// cont.firstChild
// #text
// cont.lastChild
// #text
// cont.firstElementChild
// <div class=​"Box">​Box 1​</div>​
// cont.lastElementChild
// <div class=​"Box">​Box 5​</div>​
// cont.lastElementChild.style.color = "red"
// 'red'
// cont.lastElementChild.style.backgroundColor = "black"
// 'black'
// cont.lastElementChild.parentElement
//     < div class=​"container" >​…​</div >​

        
//     document.firstElementChild.firstElementChild
//     <head>​…​</head>​
//     document.body.firstElementChild.firstElementChild
//     <div class=​"Box">​Box 1​</div>​
//     document.body.firstElementChild.children
// HTMLCollection(5)[div.Box, div.Box, div.Box, div.Box, div.Box]
    


// document.body.firstElementChild.children[0]
// <div class=​"Box">​Box 1​</div>​
// document.body.firstElementChild.children[1]
// <div class=​"Box">​Box 2​</div>​
// document.body.firstElementChild.children[2]
// <div class=​"Box">​Box 3​</div>​
// document.body.firstElementChild.children[3]
// <div class=​"Box">​Box 4​</div>​
// document.body.firstElementChild.children[3].nextElementSibling
// <div class=​"Box">​Box 5​</div>​
// document.body.firstElementChild.children[3].previousElementSibling
// <div class=​"Box">​Box 3​</div>​
// document.body.firstElementChild.children[3].nextSibling
// #text
// document.body.firstElementChild.children[4].nextSibling
// #text
// document.body.firstElementChild.children[3].previousSibling
// #text