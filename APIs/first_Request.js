



const request = require('request');
request('https://api.deezer.com/track/1550777802', function (error, response, body) {
    if (error) {
        console.log('something went wrong');
        console.log(error)
    }
    else{
    if (response.statusCode == 200) {
        const musicData = JSON.parse(body)
      console.log(musicData['link', 'id', 'title' ] );
     
    }
    }
})

https://www.omdbapi.com/?s=Frozen&y=2019&plot=full8&apikey=a050a554