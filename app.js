var app = angular.module("wordApp",[]);

app.controller("wordController", function($scope){
	$scope.words=[];
	var pool=[
		{text:'alpha', style:'underline'},
		{text: 'bravo', style: 'red'},
		{text: 'charlie', style: 'red'},
		{text: 'delta', style:'underline'},
		{text:  'echo', style: 'red'},
		{text:  'foxtrot', style:'underline'},
		{text:  'gamma', style: 'red'},
		{text:  'tango', style:'underline'},
		{text:  'x-ray', style: 'red'},
		{text:  'victory', style:'underline'},
	];

	$scope.random = function (randWord){
		var num = Math.floor(Math.random() * 10);
		var randWord = pool[num];

		console.log(randWord);
		$scope.words.push(randWord);
	};

	$scope.otherRandom = function (){
		$scope.random();
		$scope.random();
		$scope.random();
		$scope.random();
	};

	// $scope.color = function(){
	// 	$scope.first = true;
	// 	$scope.second = true;
	// 	$scope.third = true;
	// };
});