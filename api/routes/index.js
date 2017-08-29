var express = require('express');
var router = express.Router();

var ctrlFoods = require('../controllers/foods.controllers.js');
var ctrlReviews = require('../controllers/reviews.controllers.js');
var ctrlUsers = require('../controllers/users.controllers.js');

// Hotel routes
router
  .route('/food')
  .get(ctrlFoods.foodsGetAll)
  .post(ctrlFoods.foodsAddOne);

router
  .route('/food/:foodId')
  .get(ctrlFoods.foodsGetOne)
  .put(ctrlFoods.foodsUpdateOne);

/*
// Review routes
router
  .route('/hotels/:hotelId/reviews')
  .get(ctrlReviews.reviewsGetAll)
  .post(ctrlUsers.authenticate, ctrlReviews.reviewsAddOne);

router
  .route('/hotels/:hotelId/reviews/:reviewId')
  .get(ctrlReviews.reviewsGetOne)
  .put(ctrlReviews.reviewsUpdateOne);

// Authentication
router
  .route('/users/register')
  .post(ctrlUsers.register);

  router
    .route('/users/login')
    .post(ctrlUsers.login);
*/
module.exports = router;
