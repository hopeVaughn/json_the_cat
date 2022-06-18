const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error !== null || response.statusCode !== 200) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(`Your request for ${breedName} is invalid please enter a valid search parameter`, null);
    } else {
      callback(null, data[0].description);
    }

  });
};

module.exports = {
  fetchBreedDescription
};
