/* eslint-disable */
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'listings',
});


// CREATE KEYSPACE listings WITH replication =
//   {'class': 'SimpleStrategy', 'replication_factor' : 1};

CREATE TABLE neighborhoods (
  listing_id int,
  neighborhood_id int,
  name text,
  dog_friendly decimal,
  grocery_stores decimal,
  neighbors_friendly decimal,
  parking_easy decimal,
  yard decimal,
  community_events decimal,
  sidewalks decimal,
  walk_night decimal,
  five_years decimal,
  kids_outside decimal,
  car decimal,
  restaurants decimal,
  streets decimal,
  holiday decimal,
  quiet decimal,
  wildlife decimal,
  PRIMARY KEY (listing_id) )
  WITH comment = 'Q1. Find info about the neighborhood from a listing id'
;

// dsbulk-1.7.0/bin/dsbulk load -url '\/home\/lillian\/HackReactor\/SDC\/neighborhood-reviews\/BACK-END\/seeding\/cassandraSeed\/neighborhoods.csv' -k listings -t neighborhoods -delim ‘,’ -m 'listing_id=listing_id, neighborhood_id=neighborhood_id, name=name, dog_friendly=dog_friendly, grocery_stores=grocery_stores, neighbors_friendly=neighbors_friendly, parking_easy=parking_easy, yard=yard, community_events=community_events, sidewalks=sidewalks, walk_night=walk_night, five_years=five_years, kids_outside=kids_outside, car=car, restaurants=restaurants, streets=streets, holiday=holiday, quiet=quiet, wildlife=wildlife';

dsbulk-1.7.0/bin/dsbulk load -url '\/home\/lillian\/HackReactor\/SDC\/neighborhood-reviews\/BACK-END\/seeding\/cassandraSeed\/reviews.csv' -k listings -t neighborhood_reviews -delim ‘,’


CREATE TABLE neighborhood_reviews (
  review_id int,
  user_id int,
  neighborhood_id int,
  username text,
  user_type text,
  dog_owner boolean,
  parent boolean,
  review_date text,
  review_text text,
  likes int,
  community boolean,
  commute boolean,
  PRIMARY KEY ( neighborhood_id, review_id) )
  WITH comment = 'Q2. Find reviews about neighborhood from neighborhood id'
  AND CLUSTERING ORDER BY (review_id ASC);



  /*



COPY neighborhoods(listing_id,neighborhood_id,name,dog_friendly,grocery_stores,neighbors_friendly,parking_easy,yard,community_events,sidewalks,walk_night,five_years,kids_outside,car,restaurants,streets,holiday,quiet,wildlife) FROM '/home/lillian/HackReactor/SDC/neighborhood-reviews/BACK-END/seeding/cassandraSeed/neighborhoods.csv' with delimiter=',' AND header=true AND maxattempts=10 AND MINBATCHSIZE=1 AND MAXBATCHSIZE=8 AND PAGESIZE=10;


COPY neighborhood_reviews(review_id,user_id,neighborhood_id,username,user_type,review_date,review_text,likes,community,commute,dog_owner,parent)
FROM '/home/lillian/HackReactor/SDC/neighborhood-reviews/BACK-END/seeding/cassandraSeed/reviews.csv'
with delimiter=',' AND header=true AND maxattempts=10 AND MINBATCHSIZE=1 AND MAXBATCHSIZE=8 AND PAGESIZE=10;








INSERT INTO listings.neighborhoods (listing_id,neighborhood_id,name,dog_friendly,grocery_stores,neighbors_friendly,parking_easy,yard,community_events,sidewalks,walk_night,five_years,kids_outside,car,restaurants,streets,holiday,quiet,wildlife) VALUES (10000004, 1000004, 'Chinatown', 0.33, 0.43, 0.34, 0.34, 0.23, 0.74, 0.34, 0.26, 0.54, 0.33, 0.43, 0.34, 0.34, 0.23, 0.74, 0.34);

UPDATE listings.neighborhoods SET dog_friendly = 0.63 WHERE neighborhood_id = 100000;


  */