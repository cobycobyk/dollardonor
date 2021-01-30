import './CharityListItem.css';
import { Link } from 'react-router-dom';

export default function CharityListItem({ charity, handleSubscribe }) {
  const hero = {
    width: "100%",
    height: "400px",
    background: `url(${charity.picture})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }


  return (
    <>
      <section className="bgimage d-flex flex-reverse-column" style={hero}>
        <Link className="btn btn-xl btn-sub align-self-center"
          to={{
            pathname: '/pledges/new',
            state: { charity }
          }}
        >
          Subscribe!
              </Link>
      </section>
      <section className="charity-about">
        <h4>About {charity.name}</h4>
        {charity.mission}
      </section>
    </>
  );
}