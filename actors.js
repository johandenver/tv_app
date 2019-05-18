// Name, birthday, gender, country, URL
const axios = require("axios");

const actors = function(name = "Will Smith") {
  const query = "http://api.tvmaze.com/search/people?q=" + name;
  axios
    .get(query)
    .then(function(response) {
      for (var i = 0; i < response.data.length; i++) {
        const actor = response.data[i].person;
        let actorData = `--------------------------------------------------------------------
Name: ${actor.name} 
Birthday: ${actor.birthday} 
Gender: ${actor.gender}
Country: ${actor.country.name}
Profile URL: ${actor.url}`;
        console.log(actorData);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
};

module.exports = actors