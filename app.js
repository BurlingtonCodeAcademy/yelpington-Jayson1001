const express = require('express')
const fetch = require('fetch')
const path = require('path')
const port = process.env.PORT || 5050
const app = express()
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(path.resolve('public/index.html'))
});


app.listen(port, () => console.log(`Listening on port: ${port}`))