angular
    .module('app')
    .controller('aboutCtrl', ['$scope', function($scope){
        $('.menuItem').removeClass('active');
        $('#aboutMenu').addClass('active');
    }]);