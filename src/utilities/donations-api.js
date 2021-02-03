import sendRequest from './send-request';

const BASE_URL = '/api/donations';

export function addOne(charityId, subPrice) {
  return sendRequest(`${BASE_URL}`, 'POST', {charityId, subPrice})
}

export function getAll() {
  return sendRequest(BASE_URL)
}