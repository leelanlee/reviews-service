/* eslint-disable */
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'listings',
});


// CREATE KEYSPACE listings WITH replication =
//   {'class': 'SimpleStrategy', 'replication_factor' : 1};

// CREATE TABLE listings.neighborhoods (
//   id int,
//   name text,
//   dog_friendly decimal,
//   grocery_stores decimal,
//   neighbors_friendly decimal,
//   parking_easy decimal,
//   yard decimal,
//   community_events decimal,
//   sidewalks decimal,
//   walk_night decimal,
//   five_years decimal,
//   kids_outside decimal,
//   car decimal,
//   restaurants decimal,
//   streets decimal,
//   holiday decimal,
//   quiet decimal,
//   wildlife decimal,
//   PRIMARY KEY (id) )
//   WITH comment = 'Q1. Find info about the neighborhood from a listing id';

CREATE TABLE listings.neighborhoodReviews (
  neighborhood_id int,
  username text,
  user_type text,
  dog_owner boolean,
  parent boolean,
  review_date date,
  review_text text,
  likes int,
  community boolean,
  commute boolean,
  PRIMARY KEY ((neighborhood_id), reviewDate) )
  WITH comment = 'Q2. Find reviews about neighborhood from listing id'
  AND CLUSTERING ORDER BY (review_date ASC);