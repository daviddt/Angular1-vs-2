(function(angular){
	
	angular.module('sampleApp')
		.controller('searchPageController', searchPageController);
		
	function searchPageController ($scope, spotifyService) {
		$scope.searchArtist = function () {
			spotifyService.getArtists($scope.searchValue)
				.success(function(data){
					$scope.artists = data;
				});
		};
	};
	
})(angular);