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

foodieApp.controller('restaurantController',function($scope,$routeParams,$http){

  $scope.restaurantId = $routeParams.id;

  var restaurants =[{

  	name: 'Farzi Cafe',

  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',

  	location: 'Connaught Place',

  	category: 'Casual Dining, Bar',

  	vote: '4.2',

  	cuisines: 'Modern Indian',

		bestDish: {

	name: 'Corn Pizza',

	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'

},

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

     //ingregient

		 $scope.ingredients=[];

		 $scope.getIngredients = function(url) {

			 var data = '{"inputs":[{"data":{"image":{"url":"'+ url +'"}}}]}'

	 $http({

	 	'method': 'POST',

	 	'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',

	 	'headers': {

	 		'Authorization': '',

	 		'Content-Type': 'application/json'

	 	},

		'data': data,

	}).then(function (response) {

	var ingredients = response.data.outputs[0].data.concepts;

	//var list = '';

		for (var i =0;i < ingredients.length ;i++) {

			$scope.ingredients.push(ingredients[i].name)



		//list += '<div class="ingredient">' + ingredients[i].name + '</div>'

			}

	$('.ingredients').html(list);

		}, function (xhr) {

		console.log(xhr);

		 });

}

})
