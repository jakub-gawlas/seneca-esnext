import get from './get';
import add from './add';

function account(options){
  const seneca = this;

  const role = 'account';

  seneca
    .add({ role, cmd: 'get'}, get)
    .add({ role, cmd: 'add'}, add);

}

export default account;