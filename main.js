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
		bestDish: {
			name: 'Corn Pizza',
			image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
		},
  },
  {
    id:2,
		name: 'Upstairs club',
address: '6th Floor, SM-8, Sector 5, Panchkula',
location: 'Panchkula',
category: 'Casual Dining, Bar',
vote: '4.3',
cuisines: 'Italian, North Indian, Continental',
cost: '1600 ',
hours: '12 Noon to 12 AM (Mon-Sun)',
image: 'http://i.huffpost.com/gadgets/slideshows/433830/slide_433830_5660694_free.jpg',
bestDish: {
	name: 'Bacon wrap',
	image: 'http://i.huffpost.com/gadgets/slideshows/433830/slide_433830_5660694_free.jpg'
},
  },
  {
    id:3,
		name: 'Daastaan',
address: 'SCO 43, Backside, Madhya Marg, Sector 7, Chandigarh',
location: 'Chandigarh ',
category: 'Casual Dining',
vote: '4.0',
cuisines: 'North Indian',
cost: '1000',
hours: '12 Noon to 12 AM(Mon-Sun)',
image: 'https://khaopeeyo.files.wordpress.com/2012/01/paneer-tikka-recipe-picture.jpeg',
bestDish: {
	name: 'Paneer Tikka,',
	image: 'https://khaopeeyo.files.wordpress.com/2012/01/paneer-tikka-recipe-picture.jpeg'
},
  },
  { id:4,
		name: 'Barbeque Nation',
address: 'SCO 39, Madhya Marg, Sector 26, Dehradoon',
location: 'Sector-26',
category: 'Casual Dining	',
vote: '4.5',
cuisines: 'North Indian, Chinese',
cost: '1300',
hours: '12 Noon to 3 PM, 6:30 PM to 11 PM(Mon-Sun)',
image: 'http://www.pioneerchef.com/wp-content/uploads/2015/01/SeaFood..jpg',
bestDish: {
	name: 'Sea Food',
	image: 'http://www.pioneerchef.com/wp-content/uploads/2015/01/SeaFood..jpg'
},
  },
  {
    id:5,
		name: 'Garam Dharam',
address: 'SCO 8, Madhya Marg, Sector 26, Chandigarh',
location: 'Sector-26',
category: 'Casual Dining',
vote: '3.8',
cuisines: 'North Indian',
cost: '2200',
hours: ' 11 AM to 11 PM (Mon-Sun)',
image: 'https://i0.wp.com/files.hungryforever.com/wp-content/uploads/2017/05/09195434/feature-image-soya-chaap.jpg?w=1269&strip=all&quality=80',
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
		name: 'Upstairs club',
address: '6th Floor, SM-8, Sector 5, Panchkula',
location: 'Panchkula',
category: 'Casual Dining, Bar',
vote: '4.3',
cuisines: 'Italian, North Indian, Continental',
cost: '1600 ',
hours: '12 Noon to 12 AM (Mon-Sun)',
image: 'http://i.huffpost.com/gadgets/slideshows/433830/slide_433830_5660694_free.jpg',
bestDish: {
	name: 'Bacon Wrap',
	image: 'http://i.huffpost.com/gadgets/slideshows/433830/slide_433830_5660694_free.jpg'
},
},
  {
		name: 'Daastaan',
address: 'SCO 43, Backside, Madhya Marg, Sector 7, Chandigarh',
location: 'Chandigarh ',
category: 'Casual Dining',
vote: '4.0',
cuisines: 'North Indian',
cost: '1000',
hours: '12 Noon to 12 AM(Mon-Sun)',
image: 'https://khaopeeyo.files.wordpress.com/2012/01/paneer-tikka-recipe-picture.jpeg',
bestDish: {
	name: 'Paneer Tikka,',
	image: 'https://khaopeeyo.files.wordpress.com/2012/01/paneer-tikka-recipe-picture.jpeg'
},
  },
  {
		{
name: 'Barbeque Nation',
address: 'SCO 39, Madhya Marg, Sector 26, Dehradoon',
location: 'Sector-26',
category: 'Casual Dining	',
vote: '4.5',
cuisines: 'North Indian, Chinese',
cost: '1300',
hours: '12 Noon to 3 PM, 6:30 PM to 11 PM(Mon-Sun)',
image: 'http://www.pioneerchef.com/wp-content/uploads/2015/01/SeaFood..jpg',
bestDish: {
	name: 'Sea Food',
	image: 'http://www.pioneerchef.com/wp-content/uploads/2015/01/SeaFood..jpg'
},
  },
  {name: 'Garam Dharam',
address: 'SCO 8, Madhya Marg, Sector 26, Chandigarh',
location: 'Sector-26',
category: 'Casual Dining',
vote: '3.8',
cuisines: 'North Indian',
cost: '2200',
hours: ' 11 AM to 11 PM (Mon-Sun)',
image: 'https://i0.wp.com/files.hungryforever.com/wp-content/uploads/2017/05/09195434/feature-image-soya-chaap.jpg?w=1269&strip=all&quality=80',
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
	 		'Authorization': 'Key f2a33fd7ab9744d3b43a22d47fa2d5eb',
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
