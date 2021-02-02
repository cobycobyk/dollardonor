import sendRequest from './send-request';

const BASE_URL = '/api/charities';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getOne(charity) {
  return sendRequest(`${BASE_URL}/${charity._id}`)
}

export function create(charity) {
  return sendRequest(BASE_URL, 'POST', charity);
}