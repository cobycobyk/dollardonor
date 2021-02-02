import { Link } from 'react-router-dom';
import './CharityList.css';

export default function CharityList({ user, charity }) {
  // const pathName = charity.name.replace(/\s+/g, '').toLowerCase();
  return (
    <>
      <div className="col-md-4">
        <div className="profile-card-6" style={{backgroundColor: '#'+charity.color}}><img src={charity.logo} />
          <div className="profile-name">
            {charity.name}
          </div>
          <div className="profile-position">{charity.snippet}</div>
          <div className="profile-overview">
            <div className="row text-center">
              <div className="col-xs-4">
                <h3>50</h3>
                <p>Subs</p>
                <Link className="open-code2" to={{ pathname: '/pledges/new', state: { charity } }}>Subscribe!</Link>
              </div>
              <div className="col-xs-4">
                <h3>35</h3>
                <p>Total Raised</p>
                <Link className="open-code2" to={{ pathname: 'charity-detail', state: {user, charity } }}>More Info!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}