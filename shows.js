/*
var axios = require("axios");
var userInput = process.argv.slice(2).join(" ") || null;

console.log(userInput)
var search = `http://api.tvmaze.com/singlesearch/shows?q=${userInput}`
*/

function shows(){

    var axios = require("axios");
    var userInput = process.argv.slice(2).join(" ") || null;
    var search = `http://api.tvmaze.com/singlesearch/shows?q=${userInput}`

    if (userInput === null){
        return console.log("Please add an artist after the liri command.")
    };

    axios.get(search)

        .then (function(response){
            
            var shows = response.data
                var rating = JSON.stringify(shows.rating);
                console.log(shows);
                console.log(`
                \n-----------
                \nShow Name: ${shows.name}
                \nGenre(s): ${shows.genres}
                \nRating: ${shows.rating.average}
                \nNetwork: ${shows.network.name}
                \nSummary: ${shows.summary}
                \n-----------
                `)
                
        })
        .catch(function(err){
                console.log(err);
        })

}

module.exports=shows;

shows();