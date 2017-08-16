var foodieApp=angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
  .when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})

})
foodieApp.controller('loginController',function($scope,$location)
{
  $scope.goToHome= function() {
  		console.log('Do Something')
      $location.url('home');
  	}

})
foodieApp.controller('mainController',function($scope){
  $scope.restaurants = [{
    id:1,
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
    id:2,
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Bloc E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
    id:3,
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  { id:4,
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
    id:5,
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  }
]
})
foodieApp.controller('restaurantController',function($scope,$routeParams){
  $scope.restaurantId = $routeParams.id;
  var restaurants =[{
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  }
]
 	$scope.restaurant = restaurants[$routeParams.id - 1];

})