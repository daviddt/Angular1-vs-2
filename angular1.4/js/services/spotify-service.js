(function(angular){
	
	angular.module('sampleApp')
		.factory('spotifyService', spotifyService);
		
	function spotifyService ($http) {
		var factory = {};
		var url = 'https://api.spotify.com/v1/';
		
		factory.getArtists = function (searchValue) {
			return $http.get(url + 'search?type=artist&q=' + searchValue);
		};
		
		factory.getArtistById = function (id) {
			return $http.get(url + 'artists/' + id);
		};
		
		return factory;
	};
	
})(angular);