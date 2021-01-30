import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './NewOrderPage.css';

export default function NewOrderPage() {

  const { state: { charity } } = useLocation();

  const [subPrice, setSubPrice] = useState(null)

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
        <div className="container">
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
                  <button className="open-code">Subscribe!</button>
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
                  <button data-toggle="collapse" href="#code-2" className="open-code">Subscribe!</button>
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
                  <button data-toggle="collapse" href="#code-3" className="open-code" onClick={() => handleSubscription(10)}>Subscribe!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {subPrice ?
        <div>subPrice</div>
        :
        ''
      }
    </>
  );
}