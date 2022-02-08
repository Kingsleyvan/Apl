const express = require('express');
const app = express();
const request = require ('request')
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    res.render("search");
})



app.get("/result", (req, res) => {
  const movie = req.query.search;
    request('https://www.omdbapi.com/?s=8&apikey=a050a554' + movie, function (error, response, body) {
        
        if (error) {
            console.log('something went wrong');
            console.log(error)
        }
        else{
            if (response.statusCode == 200) {
                const musicData = JSON.parse(body)
           
            res.render('result', {musicData: musicData})
             
            }
            }
    }

 ) })








app.listen(5500, function(){
    console.log(`Example app listening at http://localhost:${5500}`)
  })