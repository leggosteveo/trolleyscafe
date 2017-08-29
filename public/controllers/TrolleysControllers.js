angular.module('TrolleysApp')
	.controller('NavController', NavController)
	.controller('FoodController', FoodController)
	.controller('BevController', BevController);

function NavController($http, $location, $window) {
	var vm = this;
	vm.isActiveTab = function(url) {
    var currentPath = $location.path().split('/')[1];
    return (url === currentPath ? 'active' : '');
  }
};

function FoodController(foodDataFactory) {
	var vm      = this;
	foodDataFactory.foodList().then(function(response) {
    // console.log(response);
    vm.food = response.data;
  });
};

 function BevController() {
	vm      = this;
	vm.bevs = {
			categories: [{
							name: 'BOTTLED BEER',
							Items:[{
								Name: 'Domestic',
						 		Description: 'Budweiser, Budlight, CoorsLight, Miller Lite, Michelob Ultra, Sam Adams',
						 		Price: 5
								},
								{Name: 'Premium',
						 		Description: 'Blue Moon, Corona, Heineken, Stella, Yuengling',
						 		Price:6	
								}
							]
			},
							{name: 'DRAFT BEER',
							Items:[
								{Name: 'Domestic',
								 Description: 'BudLight, CoorsLight, Sam Adams',
								 Price:	5
								},
								{Name: 'Premium',
								 Description: 'Blue Moon, Goose Island I.P.A. Stella Artois',
								 Price:6	
								}
							],
							info: 'Upgrade to a 23oz. for $2 more'
			},{
							name: 'SIGNATURE COCKTAILS',
							Items:[{
								Name: 'Watermelon Martini ',
						 		Description: 'Smirnoff Vodka, Fresh Watermelon, Agave',
						 		Price:9
								},
								{Name: 'Trolleys Margarita ',
						 		Description: 'Don Julio Reposado, Grand Marnier',
						 		Price:10	
								},
								{Name: 'Snickertini',
						 		Description: 'Smirnoff Vanilla, Kahlua, Frangelico, Cream',
						 		Price:11	
								},
								{Name: 'Spiked Raspberry Lemonade',
								 Description: 'Wicked Dolphin Rum with Raspberry Liqueur, Barrel Aged In-House, Lemonade',
								 Price:8	
								},
								{Name: 'Trolleys Bloody Mary',
								 Description: 'Titos Vodka, Garnished with a Seasoned Rim, Jalapeno and Pickle',
								 Price:10	
								},
								{Name: 'Mojito—Try a Flavor!',
								 Description: 'Captain Morgan: White (Classic Mojito), Coconut, Pineapple or Grapefruit ',
								 Price:9
								},
								{Name: 'Crownberry Apple',
								 Description: 'Crown Apple, Cranberry Juice',
								 Price:9	
								}
							]
			},{
							name: 'MOCKTAILS',
							Items:[{
								Name: 'Watermelon Martini ',
						 		Description: 'Smirnoff Vodka, Fresh Watermelon, Agave',
						 		Price:9
								},
								{Name: 'Trolleys Margarita ',
						 		Description: 'Don Julio Reposado, Grand Marnier',
						 		Price:10	
								}
							]
			}
					]
			};
};
