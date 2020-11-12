DROP DATABASE IF EXISTS neighborhoodReviews;
CREATE DATABASE neighborhoodReviews;

USE neighborhoodReviews;

CREATE TABLE neighborhoods (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  full_text VARCHAR(255) NOT NULL,
  dog_friendly DECIMAL NOT NULL,
  grocery_stores DECIMAL NOT NULL,
  neighbors_friendly DECIMAL NOT NULL,
  parking_easy DECIMAL NOT NULL,
  yard DECIMAL NOT NULL,
  community_events DECIMAL NOT NULL,
  sidewalks DECIMAL NOT NULL,
  walk_night DECIMAL NOT NULL,
  five_years DECIMAL NOT NULL,
  kids_outside DECIMAL NOT NULL,
  car DECIMAL NOT NULL,
  resturants DECIMAL NOT NULL,
  streets DECIMAL NOT NULL,
  holiday DECIMAL NOT NULL,
  quiet DECIMAL NOT NULL,
  wildlife DECIMAL NOT NULL
);

CREATE TABLE listings (
  id INT NOT NULL PRIMARY KEY,
  neighborhood_id INT NOT NULL,
  FOREIGN KEY (neighborhood_id)
    REFERENCES neighborhoods(id)
);


CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  user_type VARCHAR(30) NOT NULL,
  dog_owner BOOLEAN NOT NULL,
  parent BOOLEAN NOT NULL
);

CREATE TABLE reviews (
  id INT NOT NULL PRIMARY KEY,
  user_id INT NOT NULL,
  neighborhood_id INT NOT NULL,
  review_date DATE NOT NULL,
  full_text VARCHAR(255) NOT NULL,
  likes INT NOT NULL,
  community BOOLEAN NOT NULL,
  commute BOOLEAN NOT NULL,

  FOREIGN KEY (neighborhood_id)
    REFERENCES neighborhoods(id),

  FOREIGN KEY (user_id)
    REFERENCES users(id)
);