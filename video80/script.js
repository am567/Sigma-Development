// let object = {
//   a: 1,
//   b: "Harry",
// };

// console.log(object);

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
// };

// // what we want rabbit is a animal so rabbit associates to animal

// rabbit.__proto__ = animal; // rabbit is associated to animal. Basically it inherits the properties of animal

class Animal {
  constructor(name) {
    this.name = name;
    console.log("it always runs");
  }

  eats() {
    console.log("kha raha hoon");
  }

  jumps() {
    console.log("kood raha hoon");
  }
}

class Lion extends Animal {
  //  Animal is prototype of Lion

  constructor(name) {
    super(name);
    console.log("it always runs and object is created...... ");
  }

  eats() {
    console.log("kah raha hoon aur roar kr raha hoon");
  }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("SHERA");
console.log(l);
