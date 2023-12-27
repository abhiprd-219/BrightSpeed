

// var x=[
//     {"number":3,"value":"test"},
//     {"number":1,"value":"test"},
//     {"number":2,"value":"test"}
// ];

// x.sort((a,b) => a.number - b.number);

// for(let i of x){
// console.log(i);
// }


var obj1 =  angular.module('demo',[]);

obj1.controller("directiveCtrl",["$scope",function($scope){
$scope.show = true;  
$scope.hide = false; 


$scope.array = ['a','b','12'];
$scope.isRed = false;

$scope.myValue;
$scope.myValue2;

$scope.imageUrl = "https://www.wallpaperup.com/uploads/wallpapers/2013/03/13/51840/accaa70eeb57306de4d0c5def6c67b41.jpg"

$scope.ironman = "https://wallpapers.com/images/featured/iron-man-ouqxo5w2b59h0042.jpg"

$scope.hi = "hi";

$scope.isClicked = !$scope.isClicked;

// Set custom styles based on the click event
$scope.customStyle =  function(){
    $scope.customStyle.colorClass = {"color":"green","background-color": "pink"};
}


$scope.hi = 'Hi';
$scope.textColor = 'red';
$scope.isClicked = false;

// Function to change text color when the paragraph is clicked
$scope.changeTextColor = function() {
  $scope.textColor = $scope.textColor === 'red' ? 'blue' : 'red'; // Toggle between red and blue
};

// Function to change color when the div is clicked
$scope.changeColor = function() {
  $scope.isClicked = !$scope.isClicked;
};




   
}]); 










