import { Link } from 'react-router-dom';
import CharityListItem from '../CharityListItem/CharityListItem';

export default function CharityList({ charity }) {
  const pathName = charity.name.replace(/\s+/g, '').toLowerCase();
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100">
        <img className="card-img-top" src={charity.picture} alt="" />
        <div className="card-body">
          <h4 className="card-title">{charity.name}</h4>
          <p className="card-text">{charity.snippet}</p>
        </div>
        <div className="card-footer">
          <Link 
          className="btn btn-primary"
          to={{
            pathname: 'charity-detail',
            state: {charity}
          }}
          >
            More Info!
          </Link>
        </div>
      </div>
    </div>
  );
}