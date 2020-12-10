/* eslint-disable max-len */
const LorenIpsum = require('lorem-ipsum').LoremIpsum;
const faker = require('faker');
// const csvWriter = require('csv-write-stream')
const fs = require('fs')


//************ Helper Functions ******************************************************************/


// // generate randomDate
const randomDate = function () {
  var start = new Date(2015, 0, 1);
  var end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString('en-US');
};

// create wordGenerator function
const textGenerator = new LorenIpsum({
  sentencesPerParagraph: {
    max: 4,
    min: 1,
  },
  wordsPerSentence: {
    max: 12,
    min: 4,
  },
});

const neighNames = ['Hills', 'Downtown', 'Uptown', 'Promenade', 'Financial District', 'OceanView', 'Oceanside', 'Soma', 'Western Addition', 'Chinatown', 'Japantown', 'Little Italy', 'Live View', 'Galvanize'];

const neigLength = neighNames.length

//************ CSV Functions ******************************************************************/

writeNeighborhoods = fs.createWriteStream('BACK-END/seeding/postgresSeed/neighborhoods.csv');
writeNeighborhoods.write('neighborhood_id,name,dog_friendly,grocery_stores,neighbors_friendly,parking_easy,yard,community_events,sidewalks,walk_night,five_years,kids_outside,car,restaurants,streets,holiday,quiet,wildlife\n', 'utf-8')

writeListings = fs.createWriteStream('BACK-END/seeding/postgresSeed/listings.csv');
writeListings.write('listing_id,neighborhood_id\n', 'utf-8')

writeUsers = fs.createWriteStream('BACK-END/seeding/postgresSeed/users.csv');
writeUsers.write('user_id,name,user_type,dog_owner,parent\n', 'utf-8')

writeReviews = fs.createWriteStream('BACK-END/seeding/postgresSeed/reviews.csv');
writeReviews.write('review_id,user_id,neighborhood_id,review_date,review_text,likes,community,commute\n', 'utf-8')



//

const writeNumListings = (numListings, numNeighborhoods, writer, encoding, callback) => {
  let i = numListings;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const neighborhood_id = Math.ceil(Math.random() * numNeighborhoods);
      const listing = `${id},${neighborhood_id}\n`
      if (i === 0) {
        writer.write(listing, encoding, callback);
      } else {
        ok = writer.write(listing, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

const writeNumNeighborhoods = (numNeighborhoods, writer, encoding, callback) => {
  let i = numNeighborhoods;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let name = neighNames[ id % neigLength - 1]
      let dog_friendly = Math.random().toFixed(2);
      let grocery_stores = Math.random().toFixed(2);
      let neighbors_friendly = Math.random().toFixed(2);
      let parking_easy = Math.random().toFixed(2);
      let yard= Math.random().toFixed(2);
      let community_events = Math.random().toFixed(2);
      let sidewalks = Math.random().toFixed(2);
      let walk_night = Math.random().toFixed(2);
      let five_years = Math.random().toFixed(2);
      let kids_outside = Math.random().toFixed(2);
      let car = Math.random().toFixed(2);
      let restaurants = Math.random().toFixed(2);
      let streets = Math.random().toFixed(2);
      let holiday = Math.random().toFixed(2);
      let quiet = Math.random().toFixed(2);
      let wildlife = Math.random().toFixed(2);
      let neighborhood = `${id},${name},${dog_friendly},${grocery_stores},${neighbors_friendly},${parking_easy},${yard},${community_events},${sidewalks},${walk_night},${five_years},${kids_outside},${car},${restaurants},${streets},${holiday},${quiet},${wildlife}\n`
      if (i === 0) {
        writer.write(neighborhood, encoding, callback);
      } else {
        ok = writer.write(neighborhood, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}


const writeNumUsers = (numUsers, writer, encoding, callback) => {
  let i = numUsers;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let name= faker.name.findName();
      let user_type = 'Resident';
      let dog_owner = Math.random() < 0.5;
      let parent = Math.random() < 0.5;
      const user = `${id},${name},${user_type},${dog_owner},${parent}\n`
      if (i === 0) {
        writer.write(user, encoding, callback);
      } else {
        ok = writer.write(user, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

const writeNumReviews = (numReviews, numUsers, numNeighborhoods, writer, encoding, callback) => {
  let i = numReviews;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let user_id = Math.ceil(Math.random() * numUsers);
      let neighborhood_id = Math.ceil(Math.random() * numNeighborhoods);
      let review_date = randomDate()
      let full_text = textGenerator.generateParagraphs(1)
      let likes = Math.floor(Math.random() * (150 - 1 + 1))
      let community = Math.random() < 0.5
      let commute = Math.random() < 0.5
      const user  = `${id},${user_id},${neighborhood_id},${review_date},${full_text},${likes}, ${community},${commute}\n`
      if (i === 0) {
        writer.write(user, encoding, callback);
      } else {
        ok = writer.write(user, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}







writeNumListings(10000000, 1000000, writeListings, 'utf-8', (err, data) => {
  var now = new Date();
    // convert date to a string in UTC timezone format:
    console.log(now.toUTCString());
  if (err) {
    console.log(err);
  } else {
    var now = new Date();
    // convert date to a string in UTC timezone format:
    console.log(now.toUTCString());
    console.log('success writing listings');
    writeListings.end();
  }
})

writeNumNeighborhoods(1000000, writeNeighborhoods, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    var now = new Date();
    // convert date to a string in UTC timezone format:
    console.log(now.toUTCString());
    console.log('success writing neighborhoods');
    writeNeighborhoods.end();
  }
})

writeNumUsers(5000000, writeUsers, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    var now = new Date();
    // convert date to a string in UTC timezone format:
    console.log(now.toUTCString());
    console.log('success writing users');
    writeUsers.end();
  }
})


writeNumReviews(40000000, 5000000, 1000000, writeReviews, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    var now = new Date();
    // convert date to a string in UTC timezone format:
    console.log(now.toUTCString());
    console.log('success writing reviews');
    writeReviews.end();
  }
})





