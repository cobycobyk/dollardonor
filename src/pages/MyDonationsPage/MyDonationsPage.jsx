import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import MyDonationsList from '../../components/MyDonationsList/MyDonationsList';

export default function MyDonationsPage() {

  const [orders, setOrders] = useState([])

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getOrders();
      setOrders(orders);
    }
    getOrders();
  }, [])

  return (
<main className="MyDonationsPage">
  <div>MyDonationsPage</div>
  {orders ?
  <>
  <h3>No Donations Made Yet</h3>
  <Link to='/charities' className="btn btn-xl btn-sub">Explore Charities</Link>
  </>
  :
  <MyDonationsList orders={orders}/>
  }
</main> 
 );
}