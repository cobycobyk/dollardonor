import { useState, useEffect } from 'react';
import './CheckoutForm.css';
import * as stripeAPI from '../../utilities/stripe-api';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm({ subPrice }) {
  const [email, setEmail] = useState('');
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  useEffect(function () {
    // Create PaymentIntent as soon as the page loads
    async function paymentIntent(subPrice) {
      const data = await stripeAPI.paymentIntent(subPrice);
      setClientSecret(data);
    }
    paymentIntent(subPrice)

  }, [subPrice]);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  const handleChange = async (evt) => {
    setDisabled(evt.empty);
    setError(evt.error ? evt.error.message : '');
  };
  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      receipt_email: email,
      payment_method: {
        card: elements.getElement(CardElement)
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };


  return (
    <>
      <form id="payment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email Address"
          required
        />
        <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
        <button
          disabled={processing || disabled || succeeded}
          id="submit"
        >
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
                "Pay"
              )}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? "result-message" : "result-message hidden"}>
        </p>
    </form>
    </>
  );
}