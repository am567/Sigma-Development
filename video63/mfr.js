
let arr = [2, 55, 11, 8, 10, 87, 6, 57];

// let new_arr = [];

// for(let i = 0; i < arr.length; i++) {
   // const element = arr[i];
    // new_arr.push(element ** 2);

// }

// console.log(new_arr);

// here we can also use map method to do the same thing and it is more efficient and easy to use

let newarr = arr.map((e) => {
    
    return e ** 2;
})

console.log(newarr);