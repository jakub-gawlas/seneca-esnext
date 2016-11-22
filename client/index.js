import Seneca from 'seneca';

const seneca = new Seneca();

seneca.client();

const payload = {
  username: 'Andrzej',
  password: '@admin'
};

seneca
  .act('role:account,cmd:get', (err, res) => console.log('get', res))
  .act('role:account,cmd:add', payload, (err, res) => console.log('add', res))
  .act('role:account,cmd:get', { username: 'Andrzej' }, (err, res) => console.log('get with exist username', res))
  .act('role:account,cmd:get', { username: 'pooow' }, (err, res) => console.log('get with NOT exist username', res));

seneca
  .act('role:star-wars,cmd:get,type:people', { id: 1 }, console.log)
  .act('role:star-wars,cmd:get,type:people', { id: 5 }, console.log);