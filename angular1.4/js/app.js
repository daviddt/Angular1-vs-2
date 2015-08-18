(function(angular){
	
	angular.module('sampleApp', ['ngRoute'])
		.config(sampleAppConfig);
		
	function sampleAppConfig ($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'searchPageController',
				templateUrl: 'partials/search-page.html'	
			})
			.when('/artist/:id', {
				controller: 'artistPageController',
				templateUrl: 'partials/artist-page.html'	
			})
			.otherwise({
				redirectTo: '/'
			});
	};
	
})(angular);