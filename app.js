(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchItems', LunchItems);

LunchItems.$inject = ['$scope'];
function LunchItems ($scope) {
	$scope.items = "";
	$scope.finalMessage = "";
	$scope.remark = "Attention!!! I consider any empty item, i.e., , , as an item towards to the count.";
	$scope.ShowMessage = function (){
		var messageToShow = calculateNumberOfItems($scope.items);
		$scope.finalMessage = messageToShow;
	};
	function calculateNumberOfItems(string) {
		var	totalNumberOfItems = 0;
		var message = "";
		if (string.length === 0) {
			message += 'Please enter data first';
		}
		else {
			totalNumberOfItems += string.split(',').length;
			if (totalNumberOfItems > 3) {
				message += 'Too much!';
			} 
			else {
				message += 'Enjoy!';
			}
		};
		return message;
	};
};


})();