
let a = [1, 93, 5, 6, 88];


for (let i = 0; i < a.length; i++) {
    const element = a[i];
    console.log(element);
}

// for each loop

a.forEach((value, index, arr) => {
   //  console.log(value, index, arr);
})

// for in loop

let obj = {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
    e : 5,
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
      //  console.log(element);
    }
}

// FOR OF LOOP

for (const iterator of a) {

    console.log(iterator);
    
}