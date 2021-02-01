import { Link } from 'react-router-dom';
import './CharityList.css';

export default function CharityList({ charity }) {
  const pathName = charity.name.replace(/\s+/g, '').toLowerCase();
  return (
    <>
            <div className="col-sm-6 col-md-3 ">
              <div className="dl">
                <div className="brand">
                </div>
                <div className="discount coralb">
                  <img className="charlogo" src={charity.logo} alt="logo" />
                  <div className="charname">{charity.name}</div>
                </div>
                <div className="descr2">
                  <strong>{charity.snippet}</strong>
                </div>
                <div className="coupon2 midnight-mint">
                  <Link className="open-code2" to={{pathname: '/pledges/new', state: { charity }}}>Subscribe!</Link>
                </div>
                <div className="coupon2 midnight-yellow">
                <Link className="open-code2" to={{pathname: 'charity-detail', state: { charity }}}>More Info!</Link>
                </div>
              </div>
            </div>

      </>
  );
}