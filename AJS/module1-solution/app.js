(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){

  $scope.countItems = function() {
    var numberOfItems = 0;
    //Checking if a string exists and is not empty
    if ($scope.lunchItems){
      numberOfItems = $scope.lunchItems.split(',', 4).length;
    }
    $scope.message = GetMessage(numberOfItems);
  }

  var messagesArray = ["Please enter data first", "Enjoy!", "Too much!"];
  function GetMessage(numberOfItems){
    var result = messagesArray[0];
    if (numberOfItems > 3) {
      result = messagesArray[2];
    } else if (numberOfItems > 0) {
      result = messagesArray[1];
    }
    return result;
  }
}
})();
