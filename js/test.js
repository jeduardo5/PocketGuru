
// Defining angularjs model
// Modules are used to associate an angularjs app with the part of an html doc
// also provide access to numerous angularjs features
// Module function will accept modulename as well as a list of modules inside of the bracket

// app1 (the module name) can be found in either the html tag or body tag of the html file
var app1 = angular.module('app1', []);

// Define our controller - by referencing our controller we made in the html
// function is a factory function to get our controller ready with $scope as the dependency
// This tells angular to automatically pass in the scope object - dependency injection
// Angular basically sees the function has a scope component and goes and gets it
app1.controller('ctrl1', function($scope) {

    // Assigning some values
     $scope.first = 1;
     $scope.second = 1;

     // Creating a function inside of the scope object
     // Used unary plus operator which will convert a string into an interger
     $scope.updateValue = function() {
         $scope.calculation = $scope.first + ' + ' +  $scope.second + " = "  + (+$scope.first + +$scope.second);
     }

});