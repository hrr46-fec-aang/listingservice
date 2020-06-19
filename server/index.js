const express = require('express');
const path = require('path');
const app = express();
const port = 3002;

const Sites = require('../database/Site.js');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:id', function(req, res) {
  var listingID = req.params.id;
  console.log(listingID);
  var query = Sites.where({id: listingID});
  query.findOne(function(err, site) {
    if (err) {
      return err;
    }
    if (site) {
      res.send(site);
    }
  });

});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}/:id`);
});