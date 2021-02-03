import './CharityListItem.css';
import { Link } from 'react-router-dom';

export default function CharityListItem({ user, charity, handleSubscribe }) {
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
      <section className="fadeInDown banner" style={hero}>
        <Link className="btn btn-xl btn-sub align-self-center fadeIn first"
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
      {user ?
        (user.isAdmin ?
          <Link
            className='btn btn-xs btn-warning'
            to={{
              pathname: '/charities/edit',
              state: { charity }
            }}
          >
            EDIT
        </Link>
          :
          ''
        ) :
        ''
      }
    </>
  );
}