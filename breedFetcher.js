const request = require('request');
const args = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {

  if (error !== null || response.statusCode !== 200) {
    console.error(`error: ${error} \nstatus: ${response.statusCode}`);
    return;
  } // Print the error if one occurred

  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  const data = JSON.parse(body);
  if (data.length === 0) {
    console.error(`Your request for ${args} is invalid please enter a valid search parameter`);
    return;
  }
  if (data.length > 1) {
    for (const ele of data) {
      console.log(ele.name + ": " + ele.description + '\n');
    }
  } else {
    console.log(data[0].description);
  }
});