import { Link } from 'react-router-dom';
import './CharityList.css';

export default function CharityList({ charity }) {
  const pathName = charity.name.replace(/\s+/g, '').toLowerCase();
  return (
    <>
      <div className="col-md-4">
        <div className="profile-card-6"><img src={charity.logo} className="img img-responsive" />
          <div className="profile-name">
            {charity.name}
          </div>
          <div className="profile-position">Lorem Ipsum Donor</div>
          <div className="profile-overview">
            <div className="profile-overview">
              <div className="row text-center">
                <div className="col-xs-4">
                  <h3>1</h3>
                  <p>Rank</p>
                </div>
                <div className="col-xs-4">
                <Link className="open-code2" to={{ pathname: '/pledges/new', state: { charity } }}>Subscribe!</Link>
                  <h3>50</h3>
                  <p>Matches</p>
                </div>
                <div className="col-xs-4">
                <Link className="open-code2" to={{ pathname: 'charity-detail', state: { charity } }}>More Info!</Link>
                  <h3>35</h3>
                  <p>Goals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}