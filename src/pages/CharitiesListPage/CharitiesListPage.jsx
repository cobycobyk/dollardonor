import CharityList from '../../components/CharityList/CharityList';

export default function CharitiesPage({ user, charities }) {
  const chars = charities.map(charity =>
    <CharityList
      key={charity._id}
      charity={charity}
      user={user}
    />
  );

  return (
    <div className="row justify-content-center">
      {chars}
    </div>
  );
}