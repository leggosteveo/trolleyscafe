angular.module('TrolleysApp', ['ngRoute']).config(config);

function config($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/main.html'
	})
	.when('/food', {
		templateUrl: 'partials/food.html',
		controller: FoodController,
		controllerAs: 'vm'
	})
	.when('/bev', {
		templateUrl: 'partials/bev.html',
		controller: BevController,
		controllerAs: 'vm'
	})
	.when('/aboutContact', {
		templateUrl: 'partials/aboutContact.html',
	})
	.otherwise({
		redirectTo:'/'
	});

	$locationProvider
    .html5Mode(false);
}
