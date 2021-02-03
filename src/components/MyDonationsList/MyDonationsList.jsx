// import order from "../../../models/order";

export default function MyDonationsList({ charities, orders, donation }) {
  const ords = orders.map(order =>
     order._id
    )
  const chars = charities.some(charity => charity._id === donation.charity)
  return (
    <li>
      Order Number: {donation.name.slice(-6).toUpperCase()}.
    </li>
  );
} 