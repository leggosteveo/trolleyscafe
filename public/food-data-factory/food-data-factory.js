angular.module('TrolleysApp').factory('foodDataFactory', foodDataFactory);

function foodDataFactory($http) {
  return {
    foodList: foodList,
    foodDisplay: foodDisplay,
    postReview: postReview
  };

   
  function foodList() {
    return $http.get('/api/food').then(complete).catch(failed);
  }

  function foodDisplay(id) {
    return $http.get('/api/food/' + id).then(complete).catch(failed);
  }

  function postReview(id, review) {
    return $http.post('/api/hotels/' + id + '/reviews', review).then(complete).catch(failed);
  }

  function complete(response) {
    return response;
  }

  function failed(error) {
    console.log(error.statusText);
  }

}

