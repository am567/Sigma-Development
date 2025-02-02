

let arr = [1, 2, 3, 4, 5, 6];

// console.log(arr.length);
// console.log(arr);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// let suppose if we change the first value

arr[0] = 456;

// console.log(arr[0]);

// console.log(typeof arr); // In JavaScript, arrays are objects. So, the typeof operator returns object for arrays.

console.log(arr.toString()); // The toString() method converts an array into a string of (comma separated) array values.
console.log(arr.join(" and ")); // The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator:

arr.pop(); // The pop() method removes the last element from an array:
console.log(arr);

arr.push(7); // The push() method adds a new element to an array (at the end):

arr.push("Aman Maurya");

console.log(arr);

delete arr[6]; // The delete operator is used to remove the property from the object. Here, the property is the element of the array. The delete operator removes the element but does not change the size of the array. The deleted element is replaced by undefined.

console.log(arr);

// here we have splice method  and slice method also and many more methods ....

