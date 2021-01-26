
export default function ProfilePage({ user }) {



  return (
    <>
      <h1>Profile</h1>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </>
  );
}