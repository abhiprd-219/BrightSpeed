//  document.getElementById('demo').innerHTML = "This is a part of demo is changed to Hi";

//  document.getElementById('demo').style.color = "red";

// //  document.getElementsByTagName('p').style.color = "red";

//  //document.getElementsByTagName("p").style.color = "brown";

//  var par = document.getElementsByTagName("p");
 
// //  for (var i = 0; i < par.length; i++) {
// //     para2[i].style.color = "blue";
// // }

//  var para = document.getElementsByTagName("h1");

//  para[0].style.color = "green";

//  var para2 = document.getElementsByTagName("h2");

//  for (var i = 0; i < para2.length; i++) {
//      para2[i].style.color = "blue";
//  }

// //document.querySelector("#inputByUser").textContent;

// var previous = document.getElementById("btn");


// previous.addEventListener("click",display);


// function display(){

//     document.getElementById("idd").innerHTML = previous;

// //    document.getElementsById("idd").innerHTML = previous;
// }



//Task 2


// function display() {
//     var userInput = document.getElementById("userInput").value;

//     document.getElementById("output").innerText = userInput;
// }

// var data = document.getElementById("userInput");

// data.addEventListener("input", function (){});

// let arr =[
//     {
//         name: "stark",
//         age: 23,
//         city: "delhi"
//     },
//     {
//         name: "captain",
//         age: 231,
//         city: "delhi"
//     },
//     {
//         name: "thor",
//         age: 232,
//         city: "delhi"
//     }

// ];
// for(let i in arr){
// console.log(arr[i]);
// }
// let arr2 = [];
// for(let i in arr){
// arr2.push(arr[i].name);
// }

// console.log(arr2);

// let stringData = arr2.toString();

// let newString = stringData.replace(/,/g, "   ,   ");
// console.log(stringData);

//    document.getElementById("main").innerHTML = newString;

//Task 3


// function display() {

//     document.getElementById("main").innerHTML = `<h1> ${newString}</h1>`;
// }

// var data = document.getElementById("main");

// data.addEventListener("input", function (){});


//Task 4 

// function displayUnamePassword(e) {
//     e.preventDefault();
//         var userName = document.getElementById("userName").value;
    
//         var password = document.getElementById("password").value;

//         document.getElementById("output2").innerHTML =`UserName = <b>${userName}</b>  Password = <b>${password}</b>`;
//         document.getElementById('output2').style.color = "green";
//     }
    
//     var data = document.getElementById("formData");
    
//     data.addEventListener("submit", displayUnamePassword);
   


    //Task 5


    var arrOfName = ["conor","nate","lesner","khabib","anshul"];

    console.log(arrOfName[0]);

    document.getElementById("nameId1").innerHTML = arrOfName[0];
    document.getElementById("nameId2").innerHTML = arrOfName[1];
    document.getElementById("nameId3").innerHTML = arrOfName[2];
    document.getElementById("nameId4").innerHTML = arrOfName[3];
    document.getElementById("nameId5").innerHTML = arrOfName[4];

    
    // let mainStr = newString;
 
   let dltName = function(arrOfName){

    let str = document.getElementById

   let v = arrOfName.replace(str,"");
   console.log(v);
   }


//    let str = "conor";
//    dltName(str,mainStr);


// let onlyName = arrOfName.toString();

//      let newString = onlyName.replace(/,/g, " ");
//      console.log(newString);

   //  document.getElementById("nameId").innerHTML = newHTML;


 //  document.getElementById("nameId1").innerHTML = newString;





 
    