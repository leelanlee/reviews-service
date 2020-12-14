const cassandra = require('cassandra-driver');

var distance = cassandra.types.distance;


const client = new cassandra.Client({
  contactPoints: ['localhost'],
  pooling: {
    coreConnectionsPerHost: {
      [distance.local] : 2,
      [distance.remote] : 1
    },
  },
  localDataCenter: 'datacenter1',
  keyspace: 'listings',
  credentials: { username: 'cassandra', password: 'cassandra' }
});

module.exports.client = client;

