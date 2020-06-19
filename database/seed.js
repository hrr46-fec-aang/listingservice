const db = require('./index.js');
const Site = require('./Site.js');
const faker = require('faker');


const exData = {
  id: 0,
  host: {
    name: faker.name.firstName(),
    image: faker.image.avatar(),
    status: faker.random.boolean()
  },
  site: {
    state: faker.address.state(),
    prop: faker.lorem.words(),
    site: faker.lorem.word(),
    desc: faker.lorem.paragraphs()
  },
  info: {
    area: {
      lodge: faker.lorem.words(),
      sites: faker.random.number(10),
      guests: faker.random.number(100),
      parking: faker.random.boolean(),
      ada: faker.random.boolean()
    },
    ess: { // essentials
      fire: faker.lorem.words(),
      toilet: faker.lorem.words(),
      pets: faker.lorem.words(),
    },
    amnt: { // amenities
      water: faker.lorem.words(),
      picnic: faker.lorem.words(),
      kitchen: faker.lorem.words(),
      shower: faker.lorem.words(),
      wifi: faker.lorem.words(),
      trash: faker.lorem.words()
    }
  },
  details: {
    in: faker.lorem.words(),
    out: faker.lorem.words(),
    canc: faker.lorem.word(),
    arrv: faker.lorem.words(),
    min: faker.random.number({min: 0, max: 100}),
    book: faker.random.number({min: 0, max: 12})
  },
  acts: [ // activities
    {
      title: faker.lorem.word(),
      desc: faker.lorem.paragraph()
    },
    {
      title: faker.lorem.word(),
      desc: faker.lorem.sentence()
    },
    {
      title: faker.lorem.word(),
      desc: faker.lorem.sentence()
    }
  ],
  feats: [ // features
    {
      title: faker.lorem.words(),
      desc: faker.lorem.sentence()
    },
    {
      title: faker.lorem.words(),
      desc: faker.lorem.sentence()
    },
    {
      title: faker.lorem.words(),
      desc: faker.lorem.sentence()
    }
  ],
  vibe: {
    elev: faker.random.number({min: 0, max: 14000}), // elevation of campsite
    temp: faker.random.number({min: 30, max: 100}), // temperature at campsite
    dist: faker.random.number(100) // distance to campsite
  }
};

// create the data in the dB
// best practice is to disconnect after connecting ("Site" uses .model method, which connects to db)
const addExData = function() {
  for (var i = 1; i < 101; i++) {
    var dataEntry = exData;
    dataEntry.id = i;
    Site.create(dataEntry)
      .then(() => db.disconnect())
      .catch(err => console.log(err));
  }
};

// invoke function to seed data
addExData();