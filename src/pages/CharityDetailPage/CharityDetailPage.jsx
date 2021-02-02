import CharityListItem from '../../components/CharityListItem/CharityListItem';
import { useLocation } from 'react-router-dom';

export default function CharityDetailPage() {

  const { state : {charity, user} } = useLocation();

  return (
    <>
    <CharityListItem 
      charity={charity}
      key={charity._id}
      user={user}
      />
    </>
  );
}