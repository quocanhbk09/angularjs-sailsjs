angular
    .module('app')
    .factory('Exams',['$http', function($http){
        return{
            get: function(){
                return $http({method: 'GET', url: '/exam'}).
                    success(function(response) {
                        return response;
                    }).
                    error(function() {
                        alert('ERROR: Can not get list exam');
                    });
            },

            create: function(title){
                console.log('title', title);
                console.log('title', typeof title);

                return $http({method: 'POST', url: '/exam', data: {title: title}}).
                    success(function(response) {
                        console.log(response);
                        return response;
                    }).
                    error(function() {
                        alert('ERROR: Can not create exam');
                    });
            },

            destroy: function(id){
                console.log(id);
                $http({method: 'DELETE', url: '/exam/' + id}).
                    success(function(response) {
                        console.log(response);
                    }).
                    error(function() {
                        alert('ERROR: Can not delete exam');
                    });
            },

            update: function(id, data){
                $http({method: 'PUT', url: '/exam/' + id, data: data}).
                    success(function(response) {
                        console.log(response);
                    }).
                    error(function() {
                        alert('ERROR: Can not update exam');
                    });
            }
        }
    }]);