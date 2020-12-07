/* eslint-disable max-len */
const LorenIpsum = require('lorem-ipsum').LoremIpsum;
const faker = require('faker');
const db = require('./db/connection.js');
const csvWriter = require('csv-writer-stream')

// csv writer functions
neighborhoodsWriter = csvWriter();
listingsWriter = csvWriter();
usersWriter = csvWriter();
reviewsWriter = csvWriter();

//************ Helper Functions ******************************************************************/




// create a neighborhoods stats generator
const neighborhoodStatsGenerator = function() {
  return {
    dog_friendly: Math.random().toFixed(2),
    grocery_stores: Math.random().toFixed(2),
    neighbors_friendly: Math.random().toFixed(2),
    parking_easy: Math.random().toFixed(2),
    yard: Math.random().toFixed(2),
    community_events: Math.random().toFixed(2),
    sidewalks: Math.random().toFixed(2),
    walk_night: Math.random().toFixed(2),
    five_years: Math.random().toFixed(2),
    kids_outside: Math.random().toFixed(2),
    car: Math.random().toFixed(2),
    restaurants: Math.random().toFixed(2),
    streets: Math.random().toFixed(2),
    holiday: Math.random().toFixed(2),
    quiet: Math.random().toFixed(2),
    wildlife: Math.random().toFixed(2),
  };
};

// generate randomDate
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

const generateNeighborhoods = function (numNeigh) {

}

