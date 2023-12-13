// class Student{

//     constructor(){
//         this.name = "abhi",
//         this.age = 21;
//     }

// }

// let obj1 = new Student();
// //console.log(obj1.name);




// // Parent class
// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
  
//     makeSound() {
//       return "animal sound";
//     }
//   }

//   //child class
//   class Dog extends Animal {
   
//     makeSound(sound) {
//       return sound;
//     }
//   }
 
//   let genericAnimal = new Animal("Animal1");
//   let myDog = new Dog("Buddy");

// //   console.log(myDog.name);
  
// //   // Call the overridden method
// //   console.log(genericAnimal.makeSound());
// //   console.log(myDog.makeSound("woo  hoo")); 
  

// //Array declaration
// function add(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }

// console.log(add(10,20));
// console.log(sub(40,20));

// //Array Expression  

// let addExp = function(a,b){
//     return a+b;
// }

// let subExp = function(a,b){
//     return a-b;
// }

// console.log(addExp(30,20));
// console.log(subExp(30,20));

// //Arrow Function

// var addArrow = (a=0,b=0) => {
//     return a+b;
// }

// var subArray = (a,b) => {
//     return a-b;
// }

// var a = prompt("Enter value of a");
// var b = prompt("Enter value of b");

// var resultAdd = addArrow(a,b);
// var resultSub = subArrow(a,b);

// document.getElementById('add').innerHTML = "resultAdd";
// document.getElementById('sub').innerHTML = resultSub;


const performOperation = (operation, num1, num2) => {
    switch (operation) {
        case 'add':
            return addNumbers(num1, num2);
        case 'subtract':
            return subtractNumbers(num1, num2);
        case 'multiply':
            return multiplyNumbers(num1, num2);
        case 'divide':
            return divideNumbers(num1, num2);
        default:
            return 'Invalid operation';
    }
};

const addNumbers = (num1, num2) => num1 + num2;
const subtractNumbers = (num1, num2) => num1 - num2;
const multiplyNumbers = (num1, num2) => num1 * num2;
const divideNumbers = (num1, num2) => (num2 !== 0) ? num1 / num2 : 'Cannot divide by zero';

// Example usage:
// console.log(performOperation('add', 5, 3));       // Output: 8
// console.log(performOperation('subtract', 8, 2));  // Output: 6
// console.log(performOperation('multiply', 4, 7));   // Output: 28
// console.log(performOperation('divide', 10, 2));    // Output: 5
// console.log(performOperation('unknown', 2, 3));    // Output: 'Invalid operation'


//rest operstor

function mul(...val){
    // var m =1;
    for(let i in val){
        console.log(i);
    }

   // console.log(...val);


}

 mul(1,2,3,4,5);
// console.log(multiply);

function print(...val) {
    for (let i in val) {
        console.log(val[i]);
    }
}

let val = ['a', 'b', { a: 10 }, 1, 2, 3, 4];
print(...val);














