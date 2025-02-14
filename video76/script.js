// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 5300); // it will show pending
//   });
// }

// async function getData() {
//   // IT WILL RUN IN BACKGROUND
//   // Simulate getting data from server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 15000); // it will show pending
//   });
// }

// now we will get know about Fetch API (Application Programming Interface)
async function getData() {
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1"); // it will return a promise  data which is stored in it ..
  let data = await x.json(); // it takes some time to parse in json
  return data;
}

async function main() {
  console.log("Loading Modules");

  console.log("Do Something Else"); //else we can say that to our parent component so to correct it ....

  console.log("Load Data"); // so it will load data it will take some time

  let data = await getData(); // m chata hu ki y function ruke na taki agge jo task h vo complete ho ske mtlb asynchronous property apne haath me lena chata hu

  console.log(data);

  console.log("Process Data");

  console.log("Task 2");
}
main(); // here we have called the function MAIN .....

// data.then((v) => {
//   // using callback
//   console.log(data);

//   console.log("Process Data");

//   console.log("Task 2");
// });
