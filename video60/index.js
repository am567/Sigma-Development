console.log("This is tutorial of Strings");

let names = "Aman";

console.log(names);

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);   // This will give undefined because there is no 4th index in the string


// JavaScript is made less error-prone by not throwing an error when we try to access an index that is not present in the string. Instead, it returns undefined. This is a good feature because it prevents the program from crashing. Basically it is forgiving in nature.

console.log(names.length);

let real_name = "Aman Maurya";
let friend_name = "Kashish Khandelwal";

console.log(`My name is ${real_name} and my friend's name is ${friend_name}`); // This is called string interpolation and Template literals

let myname = "Kavya Singh";

console.log(myname.toLowerCase());
console.log(myname.toUpperCase());

console.log(myname.slice(0, 7));
console.log(myname.slice(1));

console.log(myname.replace("Kavya", "Guneet"));

console.log(myname.concat(" Sandali Gupta", " Aman Maurya "));