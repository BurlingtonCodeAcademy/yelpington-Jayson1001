const express = require('express')
const path = require('path')
const port = process.env.PORT || 5050
const app = express()
app.use(express.static('public'));

//-----path to my index.html home page-----//
app.get('/', (req, res) => {
    res.send(path.resolve('/public/index.html'))
});

//-----Path to my restaurant.html page after clicking specific restaurant on home page-----//
app.get('/restaurant', (req, res) => {
    res.sendFile(path.resolve('public/restaurant.html'))
});


app.listen(port, () => console.log(`Listening on port: ${port}`))