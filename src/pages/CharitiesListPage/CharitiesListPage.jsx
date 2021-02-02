import CharityList from '../../components/CharityList/CharityList';

export default function CharitiesPage({ charities }) {
  const chars = charities.map(charity =>
    <CharityList
      key={charity._id}
      charity={charity}
    />
  );

  return (
    <div className="row justify-content-center">
      {chars}
    </div>
  );
}