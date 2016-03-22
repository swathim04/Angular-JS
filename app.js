 var app = angular.module('myApp', [])
        
        app.controller('reverseController', function($scope){
           
            
            $scope.add = function(){
                $scope.result =  parseInt($scope.oper1) +  parseInt($scope.oper2)
            }
            $scope.sub = function(){
                $scope.result =  $scope.oper1 - $scope.oper2
            }
            
            
        })