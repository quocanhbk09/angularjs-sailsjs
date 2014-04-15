angular
    .module('app')
    .controller('homeCtrl', ['$scope', 'Exams', function($scope, Exams){
        $('.menuItem').removeClass('active');
        $('#homeMenu').addClass('active');


    }]);