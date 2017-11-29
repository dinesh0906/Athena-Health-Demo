/**
 * Created by thinesh.babu on 11/28/2017.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(
      __dirname, '..', '..', 'client', 'views', 'index.html'));
});

router.get('/1.0/home', function(req, res) {
    fs.readFile('config/data.json', function (err, data) {
        if (err) throw err;
        var jsonList = JSON.parse(data);
        console.log(jsonList);
        res.send(jsonList);
    });
});

module.exports = router;
