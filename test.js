import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  vus: 5,         // 5 usuários virtuais
  duration: '10s' // por 10 segundos
};

export default function () {
  const res = http.get('https://test.k6.io');
  check(res, {
    'status é 200': (r) => r.status === 200,
  });
  sleep(1);
}