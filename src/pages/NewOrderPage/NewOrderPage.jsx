import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './NewOrderPage.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';

export default function NewOrderPage({ user, handleAddDonation}) {

  const { state: { charity } } = useLocation();
  const [subPrice, setSubPrice] = useState(null)
  const promise = loadStripe("pk_test_51IFlwABxDFc0cpgFrgbpTLT0kyx5Fg2yrd2gyjouE9ofLNM5gYLTFnVSGx8aHDUTi0hAyCkIoOagwALruPskCtsn00nh14rYid");

  function handleSubscription(n) {
    setSubPrice(n);
  }


  return (
    <>
      <div className="select">
        <strong>
          {charity.name}
        </strong>
      </div>
      <section id="labels">
        <h3>Select a subscription level</h3>
        <div className="container justify-content-center">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-md-3">
              <div className="dl">
                <div className="brand">
                </div>
                <div className="discount alizarin">$1
                <div className="type">Per Month</div>
                </div>
                <div className="descr">
                  <strong>You are a Donor!</strong>
                </div>
                <div className="coupon midnight-blue">
                  <button className="open-code" onClick={() => handleSubscription(1)}>Subscribe!</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="dl">
                <div className="brand">
                </div>
                <div className="discount emerald">
                  $5
                <div className="type">
                    Per Month
                </div>
                </div>
                <div className="descr">
                  <strong>
                    Wow! We appreciate You!
                </strong>
                </div>
                <div className="coupon midnight-blue">
                  <button className="open-code" onClick={() => handleSubscription(5)}>Subscribe!</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="dl">
                <div className="brand">
                </div>
                <div className="discount peter-river">
                  $10
                <div className="type">
                    Per Month
                </div>
                </div>
                <div className="descr">
                  <strong>
                    Wow! We HEART You!
                </strong>
                </div>
                <div className="coupon midnight-blue">
                  <button className="open-code" onClick={() => handleSubscription(10)}>Subscribe!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {subPrice ?
      <div className="formdetails">
        <div>
          Your order is ${subPrice} per month
        </div>
        <div>
        <Elements stripe={promise}>
          <CheckoutForm subPrice={subPrice} user={user} charity={charity} handleAddDonation={handleAddDonation} />
        </Elements>
        </div>
      </div>
        :
        <div></div>
      }
    </>
  );
}