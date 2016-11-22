import axios from 'axios';
import { API_BASE_URI } from './config';

export function getPeople(msg, done){
  if(msg.id) return _getPeopleById(msg, done);
  return _getPeopleAll(msg, done);
}

async function _getPeopleAll(msg, done){
  try {
    const response = await axios.get(`${API_BASE_URI}/people`);
    done(null, response.data);
  }
  catch(err){
    done(err);
  }
}

async function _getPeopleById({ id }, done){
  try {
    const response = await axios.get(`${API_BASE_URI}/people/${id}`);
    done(null, response.data);
  }
  catch(err){
    done(err);
  }
}