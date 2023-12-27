
  app.controller('ProductController', function ($http,$scope,$window,$location) {
    var ctrl = this;
   

    $scope.user = localStorage.getItem('userName');
    console.log($scope.user);

   
   
    $scope.logout = function() {
      localStorage.clear(); 
      console.log("LogOut");
      alert("log out");
      $location.path('/signIn');
   };
   
     if ($scope.user === '' || $scope.user === null) {
      console.log("Please sign in again");
      alert("please Sign in first");
      $location.path('/signIn');

    }
    ctrl.selectedCategory = 'all';
    ctrl.searchKeyword = '';

    $http.get('https://fakestoreapi.com/products')
      .then(function (response) {
        ctrl.products = response.data;
        const uniqueCategories = Array.from(new Set(ctrl.products.map(product => product.category)));
        ctrl.categories = ['all', ...uniqueCategories];
        ctrl.filteredProducts = response.data;
      });

    ctrl.filterProducts = function () {
      if (ctrl.selectedCategory === 'all') {
        ctrl.filteredProducts = ctrl.products;
      } else {
        ctrl.filteredProducts = ctrl.products.filter(function (product) {
          return product.category === ctrl.selectedCategory;
        });
      }
    };

    ctrl.sortProductsByPrice = function() {
      if (ctrl.sortOrder === 'asc') {
        // Sort products by price in ascending order
        ctrl.products.sort(function(a, b) {
          return a.price - b.price;
        });
      } else if (ctrl.sortOrder === 'desc') {
        // Sort products by price in descending order
        ctrl.products.sort(function(a, b) {
          return b.price - a.price;
        });
      }
    };

    // ctrl.searchProducts = function () {
    //   ctrl.filteredProducts = ctrl.products.filter(function (product) {
    //     return product.title.toLowerCase().includes(ctrl.searchKeyword.toLowerCase());
    //   });
    // };
  });
