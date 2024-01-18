import './style.scss';
import Accounts from '../../components/accounts';

export default function Profile() {
  return (
    <div className="main bg-dark">
      <div className="profile-header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <Accounts />
    </div>
  );
}
