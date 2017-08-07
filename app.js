var app = angular.module("wordApp",[]);

app.controller("wordController", function($scope){
	pool=[];
	$scope.words=[
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

	$scope.random = function (){
		var num = Math.floor(Math.random() * 10);
		var randWord = $scope.words[num];
		
		console.log($scope.words[num]);

	}

});