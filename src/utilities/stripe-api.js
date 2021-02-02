import sendRequest from './send-request';

export function paymentIntent(amount) {
  return sendRequest(`/pay`, 'POST', {amount: amount});
}
