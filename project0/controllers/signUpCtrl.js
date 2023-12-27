
app.controller('signInCtrl', ['$scope', 'userservices', '$location', '$window', function($scope, userservices, $location, $window) {
    $scope.value;

    $scope.loginCheck = function() {
        console.log($scope.password);
        $scope.data = userservices.getuserData(function(data) {
            $scope.value = data;
            var flag = true;

            for (let i of data) {
                if ($scope.userName == i.userName && $scope.password == i.password) {
                    alert('Successfully Sign In');
                    flag = false;
                    $location.path('/index');
                    $window.localStorage.setItem("userName", $scope.userName);
                     // Exit the loop since the login is successful
                }
            }

            if (flag) {
                alert('Enter valid credentials');
            }

            // Redirect outside of the loop
           
        });
    }
}]);


app.controller('registration', ['$scope', 'userservices','$location', function($scope, userservices, $location){
    $scope.postData=function(){
       
        var userobj={
            userName:$scope.userName,
            email:$scope.email,
            password:$scope.password
        };
        console.log(userobj);

        userservices.postuserData(userobj, function(data){
            console.log(data);
            $location.path('#/signIn');
        });
    }
}])








