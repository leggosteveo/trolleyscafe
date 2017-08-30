var mongoose = require('mongoose');
var Food = mongoose.model('Food');


var runGeoQuery = function(req, res) {

  var lng = parseFloat(req.query.lng);
  var lat = parseFloat(req.query.lat);

  if (isNaN(lng) || isNaN(lat)) {
    res
      .status(400)
      .json({
        "message" : "If supplied in querystring, lng and lat must both be numbers"
      });
    return;
  }

  // A geoJSON point
  var point = {
    type : "Point",
    coordinates : [lng, lat]
  };

  var geoOptions = {
    spherical : true,
    maxDistance : 2000,
    num : 5
  };

  Food
    .geoNear(point, geoOptions, function(err, results, stats) {
      console.log('Geo Results', results);
      console.log('Geo stats', stats);
      if (err) {
        console.log("Error finding hotels");
        res
          .status(500)
          .json(err);
      } else {
        res
          .status(200)
          .json(results);
      }
    });
};

module.exports.foodsGetAll = function(req, res) {
  console.log('Requested by: ' + req.user);
  console.log('GET the foods');
  console.log(req.query);

  var offset = 0;
  var count = 20;
  var maxCount = 50;

  if (req.query && req.query.lat && req.query.lng) {
    runGeoQuery(req, res);
    return;
  }

  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }

  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }

  if (isNaN(offset) || isNaN(count)) {
    res
      .status(400)
      .json({
        "message" : "If supplied in querystring, count and offset must both be numbers"
      });
    return;
  }

  if (count > maxCount) {
    res
      .status(400)
      .json({
        "message" : "Count limit of " + maxCount + " exceeded"
      });
    return;
  }

  Food
    .find()
    .skip(offset)
    .limit(count)
    .exec(function(err, foods) {
      console.log(err);
      console.log(foods);
      if (err) {
        console.log("Error finding foods");
        res
          .status(500)
          .json(err);
      } else {
        console.log("Found foods", foods.length);
        res
          .json(foods);
      }
    });

};

module.exports.foodsGetOne = function(req, res) {
  var id = req.params.fooddId;

  console.log('GET FoodId', id);

  Food
    .findById(id)
    .exec(function(err, doc) {
      var response = {
        status : 200,
        message : doc
      };
      if (err) {
        console.log("Error finding food");
        response.status = 500;
        response.message = err;
      } else if(!doc) {
        console.log("FoodId not found in database", id);
        response.status = 404;
        response.message = {
          "message" : "Food ID not found " + id
        };
      }
      res
        .status(response.status)
        .json(response.message);
    });

};

var _splitArray = function(input) {
  var output;
  if (input && input.length > 0) {
    output = input.split(";");
  } else {
    output = [];
  }
  return output;
};

module.exports.foodsAddOne = function(req, res) {
  console.log("POST new food");

  Food
    .create({
      name : req.body.name 
    },  function(err, hotel) {
      if (err) {
        console.log("Error creating food");
        res
          .status(400)
          .json(err);
      } else {
        console.log("Food created!", food);
        res
          .status(201)
          .json(food);
      }
    });

};


module.exports.foodsUpdateOne = function(req, res) {
  var FoodId = req.params.FoodId;

  console.log('GET FoodId', FoodId);

  Food
    .findById(FoodId)
    .select('-Items')
    .exec(function(err, food) {
      if (err) {
        console.log("Error finding food");
        res
          .status(500)
          .json(err);
          return;
      } else if(!hotel) {
        console.log("FoodId not found in database", FoodId);
        res
          .status(404)
          .json({
            "message" : "Food ID not found " + FoodId
          });
          return;
      }

      food.name = req.body.name;

      food
        .save(function(err, foodUpdated) {
          if(err) {
            res
              .status(500)
              .json(err);
          } else {
            res
              .status(204)
              .json();
          }
        });


    });

};
