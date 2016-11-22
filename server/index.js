import Seneca from 'seneca';
import account from './account';
import starWars from './star-wars';

const seneca = new Seneca();

seneca
  .use(account)
  .use(starWars)
  .listen();


