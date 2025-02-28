console.log("This is promises...");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  console.log(a);
  if (a < 0.5) {
    reject("it cannot be executed");
  } else {
    setTimeout(() => {
      console.log("yes i am done");
      resolve("Harry");
    }, 3000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  // it is called promise when there is CALLBACK HELL
  let a = Math.random();
  console.log(a);
  if (a < 0.5) {
    reject("it cannot be executed");
  } else {
    setTimeout(() => {
      console.log("yes i am done 2");
      resolve("Harry 2");
    }, 1000);
  }
});

// let p3 = Promise.all([prom1,prom2]);    // if both primises have value greater than 0.5 then only it will print harry when both the promises are resolve

let p3 = Promise.allSettled([prom1, prom2]); // it will provide us the status

p3.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});

// Aman Maurya is the topper of the class

// our try should be that no error should be printed in console

// we should not use try catch block and also not use the power of asynchronous code of wall

//  and we should also
