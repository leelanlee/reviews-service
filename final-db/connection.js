const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'listings',
  credentials: { username: 'cassandra', password: 'cassandra' }
});

module.exports.client = client;