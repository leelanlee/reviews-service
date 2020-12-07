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
    min: 2,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const neighNames = ['Hills', 'Downtown', 'Uptown', 'Promenade', 'Financial District', 'OceanView', 'Oceanside', 'Soma', 'Western Addition', 'Chinatown', 'Japantown', 'Little Italy', 'Live View', 'Galvanize'];

const neigLength = neighNames.length

//************ CSV Functions ******************************************************************/

writeNeighborhoods = fs.createWriteStream('BACK-END/seeding/cassandraSeed/neighborhoods.csv');
writeNeighborhoods.write('neighborhood_id,name,dog_friendly,grocery_stores,neighbors_friendly,parking_easy,yard,community_events,sidewalks,walk_night,five_years,kids_outside,car,restaurants,streets,holiday,quiet,wildlife\n', 'utf-8')


writeReviews = fs.createWriteStream('BACK-END/seeding/cassandraSeed/reviews.csv');
writeReviews.write('review_id,user_id,neighborhood_id,review_date,review_text,likes,community,commute\n', 'utf-8')