angular
    .module('app')
    .controller('homeCtrl', ['$scope', 'Exams', function($scope, Exams){
        $('.menuItem').removeClass('active');
        $('#homeMenu').addClass('active');

        $scope.var = {
            newExamTitle: ''
        };
        $scope.exams = null;

        Exams.get().then(function(response){
            $scope.exams = response.data;
        });

        $scope.deleteExam = function($index){
            if(confirm('Delete this exam?')) {
                Exams.destroy($scope.exams[$index].id);
                $scope.exams.splice($index, 1);
            }
        };

        $scope.addExam = function(){
            console.log($scope.var.newExamTitle);
            Exams.create($scope.var.newExamTitle).then(function(response){
                $scope.exams.push(response.data);
                console.log(response.data)
                $scope.var.newExamTitle = '';
            });
        };
    }]);