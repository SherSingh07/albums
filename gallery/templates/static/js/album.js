/*
------------------------------------------------------------------------------
				ALBUM MANAGER ANGULAR JS SCRIPT
------------------------------------------------------------------------------
*/

// creating the module
var myApp = 
angular
.module("albumModule", [])
.controller("albumController", function($scope) {	

	$scope.message = "Album Manager Demo By Singh";

	// some album objects
	$scope.albums = [ ];

	// function to add new album
	$scope.addAlbum = function() {
		//$scope.albums.push({ title: $scope.new_album, completed: false});
	}
});
