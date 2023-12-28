
app.controller('signInCtrl', ['$scope', 'userservices', '$location', '$window', function ($scope, userservices, $location, $window) {
    $scope.value;

    $scope.loginCheck = function () {
        console.log($scope.password);
        $scope.data = userservices.getuserData(function (data) {
            $scope.value = data;
            var flag = true;

            for (let i of data) {
                if ($scope.userName == i.userName && $scope.password == i.password) {
                    alert('Successfully Sign In');
                    flag = false;
                    $location.path('/index');
                    $window.localStorage.setItem("userName", $scope.userName);

                }
            }
            if (flag) {
                alert('Enter valid credentials');
            }

        });
    }
}]);


app.controller('registration', ['$scope', 'userservices', '$location', function ($scope, userservices, $location) {
    $scope.postData = function () {

        var userobj = {
            userName: $scope.userName,
            email: $scope.email,
            password: $scope.password
        };
        console.log(userobj);
        if ($scope.email && $scope.email.indexOf('@gmail.com') === -1) {
            alert('Email must be a Gmail address.');

        }

        if ($scope.password && $scope.password.length < 6) {
            alert('Password must be at least 6 characters long.');

        }

        else {



            userservices.postuserData(userobj, function (data) {
                console.log(data);
                $location.path('/');
            });
        }
    }
}])








