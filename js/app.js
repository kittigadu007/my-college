var myApp = angular.module('myApp',['ngRoute','ui.bootstrap']);


myApp.config(function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'views/home.html'
            }).
            when('/vision', {
                templateUrl: 'views/vision.html'
            }).
            when('/missionActivity', {
                templateUrl: 'views/missionActivity.html'
            }).
            when('/college', {
                templateUrl: 'views/college.html'
            }).
            when('/chairman', {
                templateUrl: 'views/chairman.html'
            }).
            when('/correpondent', {
                templateUrl: 'views/correpondent.html'
            }).
            when('/principal', {
                templateUrl: 'views/principal.html'
            }).
            when('/courses', {
                templateUrl: 'views/courses.html'
            }).
            when('/departments', {
                templateUrl: 'views/departments.html'
            }).
            when('/syllabus', {
                templateUrl: 'views/syllabus.html'
            }).
            when('/eligibility', {
                templateUrl: 'views/eligibility.html'
            }).
            when('/academicActivity', {
                templateUrl: 'views/academicActivity.html'
            }).
            when('/achievements', {
                templateUrl: 'views/eligibility.html'
            }).
            when('/staff', {
                templateUrl: 'views/staff.html'
            }).
            when('/placements', {
                templateUrl: 'views/placements.html'
            }).
            when('/library', {
                templateUrl: 'views/library.html'
            }).
            when('/holidays', {
                templateUrl: 'views/holidays.html'
            }).
            when('/alumni', {
                templateUrl: 'views/library.html'
            }).
            when('/nss', {
                templateUrl: 'views/nss.html'
            }).
            when('/sports', {
                templateUrl: 'views/sports.html'
            }).
            when('/industrial', {
                templateUrl: 'views/industrial.html'
            }).
            when('/botnical', {
                templateUrl: 'views/botnical.html'
            }).
            when('/banksCompetitiveExamCoaching', {
                templateUrl: 'views/banksCompetitiveExamCoaching.html'
            }).
            when('/personalityDevelopment', {
                templateUrl: 'views/personalityDevelopment.html'
            }).
            when('/contact', {
              templateUrl: 'views/contact.html'
            }).
            otherwise({
                redirectTo: '/home',
            });
});

myApp.controller("homeController", ['$scope', function ($scope){
    $scope.myTtitle = "This is My Home Page";
    $scope.myMessage = "Our EIM products enable businesses to grow faster, lower operational costs, and reduce information governance and security risks by improving business insight, impact and process speed.";
}]);


myApp.controller("homeController", ['$scope', function ($scope){
  
$scope.slides = [{image: 'images/1.jpg'}];
$scope.placements = [{image: 'images/placements/p1.png'},{image: 'images/placements/p2.jpg'},{image: 'images/placements/p3.png'},{image: 'images/placements/p4.jpg'},{image: 'images/placements/p5.jpg'},{image: 'images/placements/p1.png'}];


}]);
  
