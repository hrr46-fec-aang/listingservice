const db = require('./index.js');
const Site = require('./Site.js');

const exData = [ {
  host: {
    name: 'Jane',
    image: undefined,
    status: 'top'
  },
  site: {
    state: 'New York',
    prop: 'King Fish Farm',
    site: 'Pond',
    desc: 'Fanny pack pork belly organic brunch cloud bread shaman subway tile franzen etsy. Tumblr echo park stumptown, wolf letterpress blog kitsch craft beer migas pug butcher man bun. Viral stumptown cronut poutine gochujang hell of tousled letterpress cliche XOXO edison bulb. XOXO knausgaard fam narwhal cornhole, beard schlitz hell of hammock etsy activated charcoal roof party listicle forage. Disrupt fingerstache venmo edison bulb, lo-fi pork belly intelligentsia pabst art party chillwave bitters shaman next level trust fund. Air plant marfa chicharrones dreamcatcher kogi truffaut hot chicken tofu before they sold out iceland photo booth chillwave. Lumbersexual snackwave raw denim fanny pack.\nMarfa taxidermy post-ironic, vexillologist keffiyeh trust fund jean shorts iceland tumeric bitters. Tattooed mustache celiac, echo park venmo yr gluten-free occupy authentic. Stumptown fanny pack cold-pressed mixtape whatever put a bird on it. La croix photo booth slow-carb hashtag polaroid. Snackwave aesthetic af austin +1 irony keffiyeh sriracha tattooed small batch. Four dollar toast godard ramps, leggings air plant authentic celiac 8-bit thundercats keytar.\nTumeric woke meh enamel pin slow-carb poutine, photo booth taiyaki yuccie thundercats. Succulents vape pickled, air plant af artisan tote bag neutra truffaut everyday carry wayfarers glossier jianbing meggings. Tumeric semiotics pitchfork, readymade venmo craft beer artisan ugh coloring book williamsburg chillwave squid wayfarers fashion axe. Trust fund vegan ugh pabst bushwick sartorial kombucha glossier. Brooklyn try-hard prism hot chicken, knausgaard plaid unicorn cliche. Pickled banh mi shaman chambray humblebrag, yr swag man braid green juice waistcoat normcore man bun. PBR&B scenester ennui put a bird on it leggings tilde.'
  },
  info: {
    area: {
      lodge: 'Bring your own tent',
      sites: 2,
      guests: 6,
      parking: true,
      ada: true
    },
    ess: { // essentials
      fire: 'Campfires allowed',
      toilet: 'Toilet available',
      pets: 'No pets'
    },
    amnt: { // amenities
      water: 'Potable water available',
      picnic: 'Picnic table available',
      kitchen: 'No kitchen',
      shower: 'No showers',
      wifi: 'No wifi',
      trash: 'Pack it out'
    }
  },
  details: {
    in: 'After 12pm',
    out: 'Before 12pm',
    canc: 'Moderate',
    arrv: 'Meet and greet',
    min: 1,
    book: 12
  },
  acts: [ // activities
    {
      title: 'Hiking',
      desc: 'Sed tousled gluten-free iceland selfies do meggings, ethical 3 wolf moon bespoke street art dolore stumptown exercitation brooklyn. Veniam in lorem occupy, wolf ut bitters voluptate vape affogato typewriter tbh post-ironic. Poke selvage tote bag jean shorts labore irony migas ethical small batch brooklyn. Tumblr synth street art letterpress qui vape fam sriracha. Microdosing master cleanse ut, aliqua hot chicken cold-pressed heirloom ramps celiac.'
    },
    {
      title: 'Wildlife watching',
      desc: 'Tattooed vice mollit, echo park humblebrag salvia enamel pin you probably haven\'t heard of them ex flexitarian culpa.'

    }
  ],
  feats: [ // features
    {
      title: 'Forest',
      desc: 'Our farm has beautiful woods.'
    },
    {
      title: 'Swimming hole',
      desc: 'There is a stream running along our property that has plenty of swimming holes.'
    },
    {
      title: 'River, stream, pond',
      desc: undefined
    },
    {
      title: 'Farm',
      desc: undefined
    }
  ],
  vibe: {
    elev: 1214, // elevation of campsite
    temp: 75, // temperature at campsite
    dist: 5.4 // distance to campsite
  }
}];

// create the data in the dB
// best practice is to disconnect after connecting ("Site" uses .model method, which connects to db)
const addExData = function() {
  Site.create(exData)
  .then(() => db.disconnect())
  .catch(err => console.log(err));
}

// invoke function to seed data
addExData();
