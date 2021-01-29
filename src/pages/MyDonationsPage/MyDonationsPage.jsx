import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import MyDonationsList from '../../components/MyDonationsList/MyDonationsList';

export default function MyDonationsPage({ user }) {

  const [orders, setOrders] = useState([])

  useEffect(function () {
    async function getOrders() {
      const orders = await ordersAPI.getOrders();
      setOrders(orders);
    }
    getOrders();
  }, [])

  return (

    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src={user.avatar} alt="Admin" className="rounded-circle" width="150" />
                  <div className="mt-3">
                    <h4>{user.name}</h4>
                    <p className="text-muted font-size-sm">{user.bio}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                  <span className="text-secondary">{user.website}</span>
                </li>
              </ul>
            </div>
          </div>
          {orders ?
              <div className="card align-items-center">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="mt-3">
                      <h4>No Donations Made Yet</h4>
                      <Link to='/charities' className="btn btn-xl btn-sub">Explore Charities</Link>
                    </div>
                  </div>
                </div>
              </div>
            :
            <MyDonationsList orders={orders} />
          }
        </div>
      </div>
    </div>
  );
}