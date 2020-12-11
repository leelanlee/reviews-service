const client = require('./connection.js').client;


module.exports = {

  getAllStats: (req, res) => {
    let id = req.params.id
    const query = 'SELECT * FROM neighborhoods WHERE listing_id = ?';

    client.execute(query, [id],{ prepare : true })
      .then(result => {
        let stats = [{
          listing_id: result.rows[0].listing_id,
          neighbohood_id: result.rows[0].neighborhood_id,
          name: result.rows[0].name,
          stats: {
            dog_friendly: Number(result.rows[0].dog_friendly),
            grocery_stores: Number(result.rows[0].grocery_stores),
            neighbors_friendly: Number(result.rows[0].neighbors_friendly),
            parking_easy: Number(result.rows[0].parking_easy),
            yard: Number(result.rows[0].yard),
            community_events: Number(result.rows[0].community_events),
            sidewalks: Number(result.rows[0].sidewalks),
            walk_night: Number(result.rows[0].walk_night),
            five_years: Number(result.rows[0].five_years),
            kids_outside: Number(result.rows[0].kids_outside),
            car: (result.rows[0].car),
            restaurants: Number(result.rows[0].restaurants),
            streets: Number(result.rows[0].streets),
            holiday: Number(result.rows[0].holiday),
            quiet: Number(result.rows[0].quiet),
            wildlife:Number(result.rows[0].wildlife),
          },
        }]
        res.send(stats)
      })
      .catch (err => {
        console.log('getAllStats error', err);
        res.status(404).json(err);
      })
    },

    postReview: (req, res) => {
      let query = "insert into neighborhood_reviews (review_id, user_id, neighborhood_id, username, user_type, review_date, review_text, likes, community, commute, dog_owner, parent) values (?,?,?,?,?,?,?,?,?,?,?,?)"
      let data = req.body;
      let neigborhood_id = req.params.id
      let review_id = Math.random() * (200000000 - 100000004) + 100000004;
      let params = [review_id, data.user_id, neigborhood_id, data.username, data.user_type, data.review_date, data.review_text, data.likes, data.community, data.commute, dog_owner, parent]

      client.execute(query, params, { prepare : true })
        .then( result => {
          console.log(result)
          res.sendStatus(201)
        })
        .catch (err => {
          res.sendStatus(404)
        })

    },

    getAllReviews: (req, res) => {
      let id = req.params.id;
      let category = req.query.category;
      let query = 'Select * FROM neighborhood_reviews where neighborhood_id = ?';

      if (category === 'parent') {
        query += ' AND parent = true ALLOW FILTERING';
      } else if (category === 'dog_owner') {
        query += ' AND dog_owner = true ALLOW FILTERING';
      } else if (category === 'community') {
        query += ' AND community = true ALLOW FILTERING';
      } else if (category === 'commute') {
        query += ' AND commute = true ALLOW FILTERING';
      }

      client.execute(query, [id], { prepare : true })
        .then( result => {
          let formattedResultArr = [];
          for (let i = 0; i < result.rows.length; i++) {
            let resultObj = {
              neighborhood_id: result.rows[i].neighborhood_id,
              review_id : result.rows[i].review_id,
              user_id: result.rows[i].review_id,
              username: result.rows[i].username,
              'user_type': result.rows[i].user_type,
              'review_date': result.rows[i].review_date,
              'full_text': result.rows[i].review_text,
              likes: result.rows[i].likes,
              category: {
                parent: result.rows[i].parent,
                commute: result.rows[i].commute,
                'dog_owner': result.rows[i].dog_owner,
                'community': result.rows[i].community,
              }
            }
            formattedResultArr.push(resultObj);
          }
          res.status(200).json(formattedResultArr);
        })
        .catch (err => {
          console.log('getAllReviews error', err);
          res.status(404).json(err);
        })
      },
  };


