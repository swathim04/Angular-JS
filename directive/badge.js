 var app = angular.module('myApp', [])
        
        app.controller('AppCtrl', function($scope){
           $scope.count = 4;
            console.log($scope)
        })
        
      
        
        app.directive('cgBadge', function(){
            var obj = {
                restrict: 'E',
                templateUrl: 'partial/badge.html',
                scope: {
                    text: '@text',
                    count: '@count',
                    step: '@step'
                },
                link: function(scope, element){
                    console.log(scope)
                    element.bind('click', function(){
                        
                        console.log('clicked')
                    
                        scope.count = parseInt(scope.count)+ parseInt(scope.step)
                        scope.$apply();
                    })
                }
            }
            return obj;
        })
        
        
        
        
        
        
        
        
        
        
        
        
        
        