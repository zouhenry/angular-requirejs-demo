require.config({    //this configures requirejs
    paths:{
        jquery: 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
        angular: 'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min',
        app: "app" //not needed, included for demonstration
        //homeController isn't needed root path is same as the data-main (requirejs script)
    },
    shim: {
        angular: ['jquery'] //angular depends on jquery
    }
});


require(["app", "homeController"], function(){
    //app (app.js) and its dependencies has been loaded

    // make sure html code doesn't have "ng-app" and another directive
    // ng-controller="HomeController", else you'll get a script error complaining
    // about HomeController not defined
    angular.bootstrap(document, ['app']);
})