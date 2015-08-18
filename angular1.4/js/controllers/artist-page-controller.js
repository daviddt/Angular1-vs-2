(function(angular){
	
	angular.module('sampleApp')
		.controller('artistPageController', artistPageController);
		
	function artistPageController ($scope, $routeParams, spotifyService) {
		spotifyService.getArtistById($routeParams.id)
			.success(function(data){
				$scope.artist = data;
			});
	};
	
})(angular);