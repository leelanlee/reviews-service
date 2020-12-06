# Neighborhood Reviews Service

## Table of contents
* [Background](#background)
* [Related Projects](#related-projects)
* [Setup](#setup)
* [CRUD API Endpoints](#crud-api-endpoints)
	* [Create APIs](create-apis)
	* [Read APIs](read-apis)
	* [Update APIs](update-apis)
	* [Delete APIs](delete-apis)

## Backgound
	This service is a mock version of Trulia's reviews module. It displays the stats of amenities of the house listing's
	neighborhood. Additionally, it displays crowd sourced reviews that are categorized and can be filtered by Community,
	Dog Owners, Parents, and Commute.

## Related Projects
  * https://github.com/twoLA/main_gallery_sdc
  * https://github.com/twoLA/affordability-service
  * https://github.com/twoLA/reviews
  * https://github.com/twoLA/image-carousel-service


## Setup
To run this project, install it locally using npm:

```
$ npm install
$ npm run build
$ npm start
```

## CRUD API Endpoints

### Create API
* POST neighborhood stats
	* POST api/neighborhood/:neighbor_id/neighborhood_stats
	* Request params

			{
			listing_id: 2
			}

	* Request Body

			{
				neighborhood_id: 6,
				name: 'Hayes Valley',
				stats:
				 {
					 dog_friendly: 0.38,
					 grocery_stores: 0.89,
					 neighbors_friendly: 0.24,
					 parking_easy: 0.68,
					 yard: 0.24,
					 community_events: 0.49,
					 sidewalks: 0.72,
					 walk_night: 0.74,
					 five_years: 0.34,
					 kids_outside: 0.82,
					 car: 0.89,
					 restaurants: 0.74,
					 streets: 0.17,
					 holiday: 0.54,
					 quiet: 0.93,
					 wildlife: 0.57
				}
			}
	* Reponse Success (201)
	* Reponse Failure (404)

* POST neighborhood review
	* POST api/neighborhood/:neighbor_id/neighborhood_reviews
	* Request params

			{
			neighborhood_id: 2
			userId: 11
			}

	* Request Body

			{
				reviewid: 11,
				userid: 11,
				neighborhood_id: 6,
				review_date: '10/22/2018',
				full_text:
				 'Excepteur nostrud ipsum commodo. Sunt excepteur culpa proident aute non reprehenderit Lorem fugiat exercitation sint excepteur ullamco occaecat minim.',
				likes: 97,
				community: 0,
				commute: 0,
				name: 'Mrs. Joanne Schoen',
				user_type: 'Resident',
				dog_owner: 0,
				parent: 1
			}
	* Reponse Success (201)
	* Reponse Failure (404)


### Read API
* GET neighborhood stats
	* GET /api/neighborhood/:neighbor_id/neighborhood_stats
	* Request params

			{
			neighborhood_id: 2
			}

	* Reponse Success (200)
	* Reponse Body

			{
				neighborhood_id: 6,
				name: 'Hayes Valley',
				stats:
				 {
					 dog_friendly: 0.38,
					 grocery_stores: 0.89,
					 neighbors_friendly: 0.24,
					 parking_easy: 0.68,
					 yard: 0.24,
					 community_events: 0.49,
					 sidewalks: 0.72,
					 walk_night: 0.74,
					 five_years: 0.34,
					 kids_outside: 0.82,
					 car: 0.89,
					 restaurants: 0.74,
					 streets: 0.17,
					 holiday: 0.54,
					 quiet: 0.93,
					 wildlife: 0.57
				}

* GET Reviews (joined with user info)
	* GET/listing/:listing_id/neighborhood_reviews
	* Request params

			{
			neighborhood_id: 2
			}

	* Reponse Failure (404)
	* Reponse Success (200)
	* Reponse Body

			[
				{
					id: 11,
					userid: 11,
					neighborhood_id: 6,
					review_date: '10/22/2018',
					full_text:
					 'Excepteur nostrud ipsum commodo. Sunt excepteur culpa proident aute non reprehenderit Lorem fugiat exercitation sint excepteur ullamco occaecat minim.',
					likes: 97,
					community: 1,
					commute: 0,
					name: 'Mrs. Joanne Schoen',
					user_type: 'Resident',
					dog_owner: 0,
					parent: 1
				},
				{
					id: 11,
					userid: 11,
					neighborhood_id: 6,
					review_date: '10/22/2018',
					full_text:
					 'Excepteur nostrud ipsum commodo. Sunt excepteur culpa proident aute non reprehenderit Lorem fugiat exercitation sint excepteur ullamco occaecat minim.',
					likes: 97,
					community: 0,
					commute: 0,
					name: 'Mrs. Joanne Schoen',
					user_type: 'Resident',
					dog_owner: 0,
					parent: 0
				}
			]
### Update API
* POST neighborhood stats
	* POST /api/neighborhood/:neighbor_id/neighborhood_stats
	* Request params

			{
			neighborhood_id: 2
			}

	* Request Body

			{
				neighborhood_id: 6,
				name: 'Hayes Valley',
				stats:
				 {
					 dog_friendly: 0.38,
					 grocery_stores: 0.89,
					 neighbors_friendly: 0.24,
					 parking_easy: 0.68,
					 yard: 0.24,
					 community_events: 0.49,
					 sidewalks: 0.72,
					 walk_night: 0.74,
					 five_years: 0.34,
					 kids_outside: 0.82,
					 car: 0.89,
					 restaurants: 0.74,
					 streets: 0.17,
					 holiday: 0.54,
					 quiet: 0.93,
					 wildlife: 0.57
				}
			}
	* Reponse Success (201)
	* Reponse Failure (404)

### Delete API

* DELETE neighborhood stats
	* DELETE /api/neighborhood/:neighborhood_id/neighborhood_stats

* DELETE review
	* DELETE/api/neighborhood/:neighborhood_id/neighborhood_reviews/review_id











