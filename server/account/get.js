import accounts from './model';

function get(msg, done){
  if(msg.username) return _getByUsername(msg, done);
  return _getAll(msg, done);
}

function _getAll(msg, done){
  done(null, accounts);
}

function _getByUsername({ username }, done){
  const account = accounts.find((account) => account.username === username);

  if(!account)
    return done(`Account with username = '${username}' not exists.`);

  done(null, account);
}

export default get;