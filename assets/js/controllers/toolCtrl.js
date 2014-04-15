angular
    .module('app')
    .controller('toolCtrl', ['$scope', function($scope){
        $('.menuItem').removeClass('active');
        $('#toolMenu').addClass('active');
    }]);