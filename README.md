# Neighborhood Reviews Service

## Table of contents
* [BackGround](#background)
* [Related Projects](#related-projects)
* [Setup](#setup)

## General Info
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
	*

### Read API
* GET neighborhood stats
	* GET/listing/:listing_id/stats
	* Request params
	
			{
			listing_id: 2
			}
		
	* Reponse Success (200)
	* Reponse Body
	
			{ 
				id: 6,
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

* GET Reviews

		[
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
