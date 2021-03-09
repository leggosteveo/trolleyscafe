angular
  .module("TrolleysApp")
  .controller("NavController", NavController)
  .controller("FoodController", FoodController)
  .controller("BevController", BevController);

function NavController($http, $location, $window) {
  var vm = this;
  vm.isActiveTab = function (url) {
    var currentPath = $location.path().split("/")[1];
    return url === currentPath ? "active" : "";
  };
}

function FoodController(foodDataFactory) {
  var vm = this;
  vm.food = [
    {
      name: "STARTERS",
      items: [
        {
          iname: "Cuban Sliders",
          idescription: "Pickled Zucchini, Mustard Aioli",
          iprice: 14,
        },
        {
          iname: "Steak Quesadilla",
          idescription: "Prime Rib, Red Onion, Mushrooms, Cheese",
          iprice: 14,
        },
        {
          iname: "Chicken Quesadilla",
          idescription: "Chicken, Red Onion, Green Peppers, Cheese",
          iprice: 13,
        },
        {
          iname: "Mushroom Bruschetta - VGT",
          idescription: "Portobello, Tomato Basil, Shaved Parmesan",
          iprice: 11,
        },
        {
          iname: "Santa Fe Eggrolls",
          idescription: "Avocado Ranch Dipping Sauce",
          iprice: 12,
        },
        {
          iname: "Wings *",
          idescription:
            "(Buffalo, BBQ, Soy-Ginger Glaze) , 10 - $13 / 18 - $19 / 24 - $22",
          iprice: [13, 19, 22],
        },
        {
          iname: "Tomato Basil Bisque ",
          idescription: "",
          Price: 8,
        },
        {
          iname: "Soup of the Moment",
          idescription: "",
          iprice: 8,
        },
      ],
    },
    {
      name: "SALADS",
      items: [
        {
          iname: "Southwest - VGT",
          idescription:
            "Romaine, Roasted Corn and Black Bean Salsa,Fried Onions, Avocado Ranch Drizzle,Chipotle Lime Dressing",
          iprice: 14,
        },
        {
          iname: "Kale Avacado - VGT",
          idescription:
            "Kale, Avocado, Blue Cheese, Candied Pecans, Red Onion, Lemon, Olive Oil",
          iprice: 14,
        },
        {
          iname: "Icebergwedge",
          idescription:
            "Iceberg, Diced Tomatoes, Bacon Bits, Blue Cheese Crumbles, Fried Onion Straws, Sun Dried Tomato Ranch",
          iprice: 13,
        },
      ],
    },
    {
      name: "BURGERS",
      items: [
        {
          iname: "Brie Burger",
          idescription:
            "All Natural Hamburger, Bacon-Honey Aioli, Brie, Arugula on a Pretzel Bun",
          iprice: 17,
        },
        {
          iname: "Salmon BLT",
          idescription:
            "Bacon, Lettuce, Tomato, Caper Aioli on a Whole Wheat Bun",
          iprice: 15,
        },
        {
          iname: "Trolley Burger",
          idescription:
            "All Natural Hamburger, Lettuce, Tomato, Onion, Cheese on a Brioche Bun",
          iprice: 15,
        },
        {
          iname: "Grilled Mediterranean Chicken Burger",
          idescription:
            "Sliced Avocado, Olive Tapenade, Lettuce, Tomato, Onion on a Brioche Bun",
          iprice: 13,
        },
      ],
      info:
        "Burgers include choice of: STRAIGHT CUT FRIES /  SWEET POTATO FRIES  / TATER TOTS",
    },
    {
      name: "SANDWICHES",
      items: [
        {
          iname: "Pork Belly Reuben",
          idescription:
            "Sauerkraut, 1000 Island Dressing, Swiss Cheese on a Pretzel Bun",
          iprice: 14,
        },
        {
          iname: "Prime Rib Cheesesteak",
          idescription:
            "Prime Rib, Green Peppers, Onions, Mushrooms, Cheddar Cheese Sauce on a Hoagie Roll",
          iprice: 14,
        },
        {
          iname: "Meatball Hoagie",
          idescription:
            "Marinara, Shaved Parmesan, Fried Prosciutto, Shredded Mozzarella on a Hoagie Roll",
          iprice: 12,
        },
        {
          iname: "Turkey-Brie Wrap",
          idescription:
            "Turkey, Brie, Pears, Cranberry Aioli, Arugula in a Basil Tomato Wrap",
          iprice: 13,
        },
        {
          iname: "Mahi-Mahi Fish Tacos",
          idescription:
            "Blackened or Grilled Mahi-Mahi, Pico de Gallo, Queso Blanco, Avocado Crema, Cilantro, Arugula",
          Price: 15,
        },
      ],
      info:
        "Sandwiches include choice of: STRAIGHT CUT FRIES /  SWEET POTATO FRIES  / TATER TOTS",
    },
    {
      name: "SIDES",
      items: [
        {
          iname: "Straight Cut Fries",
          idescription: "Idaho's favorite.",
          iprice: 5,
        },
        {
          iname: "Sweet Potato Fries",
          idescription: "Sweet potatoes, freshly cut and lightly fried.",
          iprice: 5,
        },
        {
          iname: "Tator Tots",
          idescription: "",
          iprice: 6,
        },
        {
          iname: "Side Salad",
          idescription:
            "Arugula/Romaine mix, tomatoes, onions, shredded cheese.",
          iprice: 6,
        },
      ],
    },
    {
      name: "ENTREES",
      items: [
        {
          iname: "Fava Bean Mushroom Risotto  - GF",
          idescription: "Fava Beans, Mushrooms, Prosciutto, Parmesan",
          iprice: 16,
        },
        {
          iname: "Blackened Shrimp Mac N Cheese",
          idescription: "Blackened Shrimp, Chorizo, Tomatoes, Mac N Cheese",
          iprice: 19,
        },
        {
          iname: "Flat Iron Steak",
          idescription:
            "With Chimichurri Sauce, Starch and Vegetable of the Day",
          iprice: 28,
        },
        {
          iname: "Garlic Lemon Mahi",
          idescription:
            "Baked Mahi with Garlic, Starch and Vegetable of the Day",
          iprice: 22,
        },
        {
          iname: "Half Roasted Chicken",
          idescription: "Pan Au Jus, Starch and Vegetable of the Day",
          Price: 20,
        },
      ],
      info: "Entrees served after 5pm",
    },
    {
      name: "DESSERTS",
      items: [
        {
          iname: "Raspberry Amaretto Chessecake",
          idescription: "",
          iprice: 8,
        },
        {
          iname: "Toffee Mousse",
          idescription: "",
          iprice: 7,
        },
        {
          iname: "Snickers Pie",
          idescription: "",
          iprice: 8,
        },
        {
          iname: "Flourless Chocolate Cake - GF",
          idescription: "",
          iprice: 8,
        },
        {
          iname: "Strawberry Shortcake",
          idescription: "",
          iprice: 8,
        },
      ],
    },
  ];
}

function BevController() {
  vm = this;
  vm.bevs = {
    categories: [
      {
        name: "BOTTLED BEER",
        Items: [
          {
            Name: "Domestic",
            Description:
              "Budweiser, Budlight, CoorsLight, Miller Lite, Michelob Ultra, Sam Adams",
            Price: 5,
          },
          {
            Name: "Premium",
            Description: "Blue Moon, Corona, Heineken, Stella, Yuengling",
            Price: 6,
          },
        ],
      },
      {
        name: "DRAFT BEER",
        Items: [
          {
            Name: "Domestic",
            Description: "BudLight, CoorsLight, Sam Adams",
            Price: 5,
          },
          {
            Name: "Premium",
            Description: "Blue Moon, Goose Island I.P.A. Stella Artois",
            Price: 6,
          },
        ],
        info: "Upgrade to a 23oz. for $2 more",
      },
      {
        name: "SIGNATURE COCKTAILS",
        Items: [
          {
            Name: "Watermelon Martini ",
            Description: "Smirnoff Vodka, Fresh Watermelon, Agave",
            Price: 9,
          },
          {
            Name: "Trolleys Margarita ",
            Description: "Don Julio Reposado, Grand Marnier",
            Price: 10,
          },
          {
            Name: "Snickertini",
            Description: "Smirnoff Vanilla, Kahlua, Frangelico, Cream",
            Price: 11,
          },
          {
            Name: "Spiked Raspberry Lemonade",
            Description:
              "Wicked Dolphin Rum with Raspberry Liqueur, Barrel Aged In-House, Lemonade",
            Price: 8,
          },
          {
            Name: "Trolleys Bloody Mary",
            Description:
              "Titos Vodka, Garnished with a Seasoned Rim, Jalapeno and Pickle",
            Price: 10,
          },
          {
            Name: "Mojito—Try a Flavor!",
            Description:
              "Captain Morgan: White (Classic Mojito), Coconut, Pineapple or Grapefruit ",
            Price: 9,
          },
          {
            Name: "Crownberry Apple",
            Description: "Crown Apple, Cranberry Juice",
            Price: 9,
          },
        ],
      },
      {
        name: "MOCKTAILS",
        Items: [
          {
            Name: "Watermelon Martini ",
            Description: "Smirnoff Vodka, Fresh Watermelon, Agave",
            Price: 9,
          },
          {
            Name: "Trolleys Margarita ",
            Description: "Don Julio Reposado, Grand Marnier",
            Price: 10,
          },
        ],
      },
    ],
  };
}
