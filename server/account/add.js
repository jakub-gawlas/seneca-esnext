import accounts from './model';

function add({ username, password }, done){
  const account = {
    username,
    password
  };
  accounts.push(account);
  done(null, account);
}

export default add;