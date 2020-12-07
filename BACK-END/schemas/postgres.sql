DROP DATABASE IF EXISTS neighborhoodReviews;
CREATE DATABASE neighborhoodReviews;

USE neighborhoodReviews;

CREATE TABLE neighborhoods (
  neighborhood_id INT NOT NULL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  dog_friendly DECIMAL(3, 2) NOT NULL,
  grocery_stores DECIMAL(3, 2) NOT NULL,
  neighbors_friendly DECIMAL(3, 2) NOT NULL,
  parking_easy DECIMAL(3, 2) NOT NULL,
  yard DECIMAL(3, 2) NOT NULL,
  community_events DECIMAL(3, 2) NOT NULL,
  sidewalks DECIMAL(3, 2) NOT NULL,
  walk_night DECIMAL(3, 2) NOT NULL,
  five_years DECIMAL(3, 2) NOT NULL,
  kids_outside DECIMAL(3, 2) NOT NULL,
  car DECIMAL(3, 2) NOT NULL,
  restaurants DECIMAL(3, 2) NOT NULL,
  streets DECIMAL(3, 2) NOT NULL,
  holiday DECIMAL(3, 2) NOT NULL,
  quiet DECIMAL(3, 2) NOT NULL,
  wildlife DECIMAL(3, 2) NOT NULL
);

CREATE TABLE listings (
  listing_id INT NOT NULL PRIMARY KEY,
  neighborhood_id INT NOT NULL,
  FOREIGN KEY (neighborhood_id) REFERENCES neighborhoods(neighborhood_id)
);

CREATE TABLE users (
  user_id INT NOT NULL PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  user_type VARCHAR(15) NOT NULL,
  dog_owner BOOLEAN NOT NULL,
  parent BOOLEAN NOT NULL
);

CREATE TABLE reviews (
  review_id INT NOT NULL PRIMARY KEY,
  user_id INT NOT NULL,
  neighborhood_id INT NOT NULL,
  review_date VARCHAR(15) NOT NULL,
  review_text TEXT NOT NULL,
  likes INT NOT NULL,
  community BOOLEAN NOT NULL,
  commute BOOLEAN NOT NULL,
  FOREIGN KEY (neighborhood_Id) REFERENCES neighborhoods(neighborhood_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);


---------------------- Delete foreign keys--------------------
--ALTER TABLE listings DELETE CONSTRAINT listings_neighborhood_id_fkey

--ALTER TABLE reviews DELETE CONSTRAINT reviews_neighborhood_id_fkey

--ALTER TABLE reviews DELETE CONSTRAINT reviews_user_id_fkey


---------------------- Add foreign keys --------------------------
--ALTER TABLE listings ADD CONSTRAINT listings_neighborhood_id_fkey  FOREIGN KEY (neighborhood_id) REFERENCES neighborhoods (neighborhood_id);

--ALTER TABLE reviews ADD CONSTRAINT reviews_neighborhood_id_fkey FOREIGN KEY (neighborhood_id) REFERENCES neighborhoods(neighborhood_id);

--ALTER TABLE reviews ADD CONSTRAINT reviews_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(user_id);


----------------------import csv --------------------------------
-- COPY listings(listing_id, neighborhood_id)
-- FROM '/home/lillian/HackReactor/SDC/neighborhood-reviews/BACK-END/seeding/postgresSeed/listings.csv'
-- DELIMITER ','
-- CSV HEADER;


-- COPY neighborhoods(neighborhood_id, name, dog_friendly, grocery_stores, neighbors_friendly, parking_easy, yard, community_events, sidewalks, walk_night, five_years, kids_outside, car, restaurants, streets, holiday, quiet, wildlife)
-- FROM '/home/lillian/HackReactor/SDC/neighborhood-reviews/BACK-END/seeding/postgresSeed/neighborhoods.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY users(user_id, name, user_type, dog_owner, parent)
-- FROM '/home/lillian/HackReactor/SDC/neighborhood-reviews/BACK-END/seeding/postgresSeed/users.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY reviews(review_id, user_id, neighborhood_id, review_date, review_text, likes, community, commute)
-- FROM '/home/lillian/HackReactor/SDC/neighborhood-reviews/BACK-END/seeding/postgresSeed/reviews.csv'
-- DELIMITER ','
-- CSV HEADER;







