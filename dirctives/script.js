                 
             var app = angular.module('testApp', []);
            
              app.controller('Appctrl',function($scope){
                
                  $scope.count = 4;
             })
                     
             app.directive('cgBadge' , function(){
                 
                var obj= {
                     restrict:'E',
                     templateUrl:'partial/badge.html',
                     scope:{
                            text:'@text', //Pass by value then in dirctives {{ }} use this 
                            count:'@count',
                            step: '@step'
                          } , 
                                                          
                      link:function(scope,element){
                          element.bind('click', function(){
                              
                              scope.count = parseInt(scope.count) + parseInt(scope.step);
                              scope.$apply();
                          })
                            
                     }
                     
                 }
                return obj;
                 
             })
           
            