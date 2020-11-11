const LorenIpsum = require('lorem-ipsum').LoremIpsum;
// create a neighborhoods stats generator
const neighborhoodStatsGenerator = function() {
  return {
    'dog_friendly': Math.random().toFixed(2),
    'grocery_stores': Math.random().toFixed(2),
    'neighbors_friendly': Math.random().toFixed(2),
    'parking_easy': Math.random().toFixed(2),
    'yard': Math.random().toFixed(2),
    'community_events': Math.random().toFixed(2),
    'sidewalks': Math.random().toFixed(2),
    'walk_night': Math.random().toFixed(2),
    'five_years': Math.random().toFixed(2),
    'kids_outside': Math.random().toFixed(2),
    'car': Math.random().toFixed(2),
    'resturants': Math.random().toFixed(2),
    'streets': Math.random().toFixed(2),
    'holiday': Math.random().toFixed(2),
    'quiet': Math.random().toFixed(2),
    'wildlife': Math.random().toFixed(2),
  };
};

// create array of 10 neighborhoods
const neighborhoods = [
  {
    'id': 1,
    'name': 'SoMA',
    'stats': neighborhoodStatsGenerator()
  },
  {
    'id': 2,
    'name': 'Pacific Heights',
    'stats': neighborhoodStatsGenerator()
  },
  {
    'id': 3,
    'name': 'Castro',
    'stats': neighborhoodStatsGenerator()
  },
  {
    'id': 4,
    'name': 'Chinatown',
    'stats': neighborhoodStatsGenerator()
  },
  {
    'id': 5,
    'name': 'Marina',
    'stats': neighborhoodStatsGenerator()
  },
  {
    'id': 6,
    'name': 'Hayes Valley',
    'stats': neighborhoodStatsGenerator()
  },
  {
    'id': 7,
    'name': 'Bayview',
    'stats': neighborhoodStatsGenerator()
  },
  {
    'id': 8,
    'name': 'Mission',
    'stats': neighborhoodStatsGenerator()
  },
  {
    'id': 9,
    'name': 'Outer Richmond',
    'stats': neighborhoodStatsGenerator()
  },
  {
    'id': 10,
    'name': 'Noe Valley',
    'stats': neighborhoodStatsGenerator()
  }
];

// console.log('neighborhood array', neighborhoods);

// create 100 listings with random neighboorhoods
const generateListings = function() {
  var listings = [];
  for (var i = 1; i < 101; i++) {
    var listing = {
      id: i,
      'neighboorhood_id': Math.floor(Math.random() * (10 - 1 + 1)) + 1,
    };
    listings.push(listing);
  }
  return listings;
};

// console.log('listing array', generateListings());

// create wordGenerator function
const textGenerator = new LorenIpsum({
  sentencesPerParagraph: {
    max: 4,
    min: 2
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

// create list of 50 users
const generateUsers = function() {
  var users = [];
  for (var i = 1; i < 51; i++) {
    var user = {
      id: i,
      name: textGenerator.generateWords(2),
      'user_type': 'Resident',
      'dog_owner': Math.random() < 0.5,
      parent: Math.random() < 0.5,
    };
    users.push(user);
  }
  return users;
};

// console.log('generate users', generateUsers());

// generate randomDate


const randomDate = function() {
  var start = new Date(2015, 0, 1);
  var end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString('en-US');
};

// console.log('random date', randomDate());

// create list of reviews
const generateReviews = function(neighborhoodID, number) {
  const reviews = [];
  for (var i = 1; i < number; i++) {
    var review = {
      id: i,
      'user_id': Math.floor(Math.random() * (50 - 1 + 1)) + 1,
      'neighboorhood_id': neighborhoodID,
      'review_date': randomDate(),
      'full_text': textGenerator.generateParagraphs(1),
      likes: Math.floor(Math.random() * (150 - 1 + 1)) + 1,
      community: Math.random() < 0.5,
      commute: Math.random() < 0.5,
    };
    reviews.push(review);
  }
  return reviews;
};

console.log(generateReviews(1, 10));