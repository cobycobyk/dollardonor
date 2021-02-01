import sendRequest from './send-request';

const BASE_URL = '/';

export function paymentIntent(amount) {
  return sendRequest(`/pay`, 'POST', {amount: amount});
}
