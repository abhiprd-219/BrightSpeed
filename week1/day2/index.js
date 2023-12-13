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

// function mul(...val){
//     // var m =1;
//     for(let i in val){
//         console.log(i);
//     }

//    // console.log(...val);


// }

//  mul(1,2,3,4,5);
// // console.log(multiply);

// function print(...val) {
//     for (let i in val) {
//         console.log(val[i]);
//     }
// }

// let val = ['a', 'b', { a: 10 }, 1, 2, 3, 4];
// print(...val);

let sum = 0;
function add(val){
    sum+= val;
}
const arr = [10,23,34,45,56];
 arr.forEach(add);

//console.log("sum" + " = " + sum);

arr.forEach(function(cValue,idx){
    //console.log(idx+ " : " + cValue)
})

const str = ['Abhi','Aman','Ram',23,321];
str.forEach(function(cValue,idx,array){
    // array[idx] = cValue.toUpperCase;
    array[idx] = cValue.toString;

});
//console.log(str);
// for(let i=0;i<str.length;i++){
// console.log(str[i]);
// }


const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

const slicedFruits = fruits.slice(1, 4);
//console.log(slicedFruits);

//const spliceElement = fruits.splice(2,3);
const spliceElement = fruits.splice(2,0,'blue','red');
//console.log(fruits);


//Task -> 

let a = {
    name: 'abhi',
    age: 10
};
let b = {
    name: 'ravi',
    age: 15
};
let c = {
    name: 'akash',
    age: 20
};

let arr1 = [];
arr1.push(a);
arr1.push(b);
arr1.push(c);
let arr2 = [];

let res = arr.filter(arr1 => arr1.age%2 === 0);
// arr2.push(res);
// console.log(arr2);

// console.log(res);

const persons = [
    { name: 'Alice', age: 10 },
    { name: 'Bob', age: 15 },
    { name: 'Charlie', age: 20 }
];

const personsWithEvenAge = persons.filter((cValue,idx,arr) => cValue.age % 2 === 0);

//console.log(personsWithEvenAge[0]);


//Task2 =>

const productList = [
    { product: 'Shoes', price: 1200 },
    { product: 'Jeans', price: 1500 },
    { product: 'Shirt', price: 700 }
];

//console.log(productList);

let finalPriceOfProduct = productList.map((cValue) => {
    return {product: cValue.product ,price: cValue.price + 500};
})

// console.log(finalPriceOfProduct[0]);
// for(let i=0;i<finalPriceOfProduct.length;i++){
//     console.log(finalPriceOfProduct[i]);
// }

let priceOnly = [];
for(let i =0;i <finalPriceOfProduct.length;i++){
priceOnly.push(finalPriceOfProduct[i].price);

}

console.log(priceOnly);
let total = priceOnly.reduce(sumTotal);

function sumTotal(acc,cValue){
    return acc+cValue;
}

console.log("total price = "+total);


const totalPrice2 = finalPriceOfProduct.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  console.log(totalPrice2)
















