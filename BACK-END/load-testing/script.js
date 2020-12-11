import http from 'k6/http';

import { sleep } from 'k6';

export let options = {
  vus: 90,
  duration: '60s',
  thresholds: {

    'failed requests': ['rate<0.1'], // threshold on a custom metric

    http_req_duration: ['p(95)<500'], // threshold on a standard metric

  },
};

export default function () {

  http.get(`http://localhost:8010/reviews/${Math.floor(Math.random() * (1000000) ) }/neighborhood_reviews/`);



  sleep(1);

}