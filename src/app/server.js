const express = require('express');
const app = express();
const router = express.Router();
const request = require('request');
const jsonfile = require('jsonfile');
const path = require("path");

app.use(express.static('json'));

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/wishlist', function(req, res) {
  const fileName = req.params.fileName;
  const file = path.normalize(__dirname + '/' + 'wishlist.json');
  console.log('path: ' + file);

  jsonfile.readFile(file, function(err, obj) {
    if(err) {
      res.json({status: 'error', reason: err.toString()});
      return;
    }

    res.json(obj);
  });
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
});
