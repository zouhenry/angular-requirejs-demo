define(["app"], function(app){
    //make sure app doesn't not require homeController
    //else, it'll become a circular dependency requirement
    app.controller("HomeController", function($scope){
       $scope.message = "home controller has been successfully registered with angular!";
    });
})