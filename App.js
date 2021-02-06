const express = require('express')
const app = express()
const port = 5000

const data = require('./data.json')

app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.get('/getItems', (req, res) => {
    res.json(data);
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });