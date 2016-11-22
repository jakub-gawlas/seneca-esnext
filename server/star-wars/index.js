import { getPeople } from './get';

function starWars(options){
  const seneca = this;

  const role = 'star-wars';

  seneca.add({ role, cmd: 'get', type: 'people' }, getPeople);
}

export default starWars;