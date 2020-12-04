# Neighborhood Reviews Service

## Table of contents
* [Background](#background)
* [Related Projects](#related-projects)
* [Setup](#setup)

## Background
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

### CREATE API
* POST neighborhood stats
	* POST/neighborhood/:neighborhood_id/neighborhood_stats
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
					 grocery_stores: 0.88,
					 neighbors_friendly: 0.24,
					 parking_easy: 0.68,
					 yard: 0.24,
					 community_events: 0.49,
					 sidewalks: 0.72,
					 walk_night: 0.74,
					 five_years: 0.34,
					 kids_outside: 0.82,
					 car: 0.89,
					 restaurants: 0.55,
					 streets: 0.17,
					 holiday: 0.77,
					 quiet: 0.93,
					 wildlife: 0.44 
				}
			}
		
	* Reponse Success (201)
	* Reponse Failure (404)
	

* POST neighborhood review
	* POST api/neighborhood/:neighborhood_id/neighborhood:userId
	* Request params
	
			{
			listing_id: 2
			user_I-: 11
			}
	* Request Body 
	
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
		}
	* Reponse Success (201)
	* Reponse Failure (404)

### READ API
* GET neighborhood stats
	* GET /neighborhood/:neighborhood_id/neighborhood_stats
	* Request params
	
			{
			listing_id: 2
			}
		
	* Reponse Success (201)
	* Reponse Failure (404)
	* Reponse Body
	
			{ 
				neighborhood_id: 6,
				name: 'Hayes Valley',
				stats:
				 { 
					 dog_friendly: 0.38,
					 grocery_stores: 0.88,
					 neighbors_friendly: 0.24,
					 parking_easy: 0.68,
					 yard: 0.24,
					 community_events: 0.49,
					 sidewalks: 0.72,
					 walk_night: 0.74,
					 five_years: 0.34,
					 kids_outside: 0.82,
					 car: 0.89,
					 restaurants: 0.55,
					 streets: 0.17,
					 holiday: 0.77,
					 quiet: 0.93,
					 wildlife: 0.44 
				}
			}
		

* GET neighborhood reviews
	* GET/neighborhood/:neighborhood_id/neighborhood_reviews
	* Request params
	
			{
			listing_id: 2
			}
		
	* Reponse Success (200)
	* Reponse Success (404)
	* Reponse Body: JSON object

			[
				{
					id: 11,
					userid: 11,
					neighborhood_id: 6,
					review_date: '10/22/2018',
					full_text:
					 'I like this parl.',
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
					 'This is one review.',
					likes: 97,
					community: 0,
					commute: 0,
					name: 'Mrs. Joanne Schoen',
					user_type: 'Resident',
					dog_owner: 0,
					parent: 0 
				}
			]
### UPDATE API
* PUT neighborhood stats
	* PUT/neighborhood/:neighborhood_id/neighborhood_stats/
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
						 grocery_stores: 0.88,
						 neighbors_friendly: 0.24,
						 parking_easy: 0.68,
						 yard: 0.24,
						 community_events: 0.49,
						 sidewalks: 0.72,
						 walk_night: 0.74,
						 five_years: 0.34,
						 kids_outside: 0.82,
						 car: 0.89,
						 restaurants: 0.55,
						 streets: 0.17,
						 holiday: 0.77,
						 quiet: 0.93,
						 wildlife: 0.44 
					}
				}
* Reponse Success (201)
* Reponse Failure (404)
		
	
* PUT neighborhood review
	* PUT/neighborhood/:neighborhood_id/neighborhood_reviews/:review_id
	* Request params

				{
				listing_id: 2
				review_id: 11
				}
	* Request Body 

			{
				review_id: 11,
				user_id: 11,
				neighborhood_id: 6,
				review_date: '10/22/2018',
				full_text:
				 'This is a change.',
				likes: 97,
				community: 0,
				commute: 0,
				name: 'Mrs. Joanne Schoen',
				user_type: 'Resident',
				dog_owner: 0,
				parent: 0 
			}
	* Reponse Success (200)
	* Reponse Failure (404)
		
### DELETE API
* DELETE neighborhood stats
	* DELETE/neighborhood/:neighborhood_id/neighborhood_stats/
	* Request params

				{
				neighborhood_id: 2
				}
				
	* Reponse Success (200)
	* Reponse Failure (404)

* DELETE neighborhood reviews
	* DELETE/neighborhood/:neighborhood_id/neighborhood_reviews/:review_id
	* Request params

				{
				neighborhood_id: 2,
				review_id: 11
				}
				
	* Reponse Success (200)
	* Reponse Failure (404)
		
		
		
		
