const db = require('./index.js');
const Site = require('./Site.js');

// add sample data to seed dB
const exData = []

// create the data in the dB
// best practice is to disconnect after connecting ("Site" uses .model method, which connects to db)
const addExData = function() {
  Site.create(exData)
  .then(() => db.connect.close());
}

// invoke function to seed data
addExData();
