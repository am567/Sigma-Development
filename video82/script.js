// there are some concepts in javascript which makes the life of a developer so much easy

async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}

// let a = await sleep();
// let b = await sleep();          // right now it is showing error but when we pout it in a function  it will be resolved

function sum(a, b, c) {
  return a + b + c;
}

(async function main() {
  // it is called IIFE immediately invoked function

  //   let a = await sleep();
  //   console.log(a);
  //   let b = await sleep();
  //   console.log(b);

  // It's time for DESTRUCTURING

  //   let [x, y, ...rest] = [1, 7, 45, 32, 56, 78, 98, 100]; // it is desturcturing
  //   console.log(x, y, rest);

  let obj = {
    a: 1,
    b: 2,
    c: 3,
  };

  let { a, b } = obj;
  console.log(a, b);

  let arr = [1, 4, 6];
  console.log(sum(...arr)); // it is spread operator
})();

// set the time for the latest time given
