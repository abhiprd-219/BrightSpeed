app.service('userservices', ['$http', function($http){
    this.getuserData = function(cb){
        $http(
            {
                method:'GET',
                url:'http://localhost:3000/users'
            }
        ).then(function(response){
            cb(response.data);
        },function(e){
            console.log(e);
        });
    }

    this.postuserData = function(userobj,cb){
        $http(
            {
                method:'POST',
                url:'http://localhost:3000/users',
                data:userobj
            }
        ).then(function(response){
            cb(response.data);
        },function(e){
            console.log(e);
        })
    }

}]);


    