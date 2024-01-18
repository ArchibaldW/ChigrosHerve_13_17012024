import './style.scss';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function Login() {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setUsername(e.target.username.value);
    setPassword(e.target.password.value);
  }

  return (
    <div className="main bg-dark">
      <section class="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        {username}
        {password}
        <form onSubmit={handleSubmit}>
          <div class="input-wrapper">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
            />
          </div>
          <div class="input-wrapper">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
            />
          </div>
          <div class="input-remember">
            <input
              type="checkbox"
              id="remember-me"
            />
            <label for="remember-me">Remember me</label>
          </div>
          <button class="sign-in-button">Sign In</button>
        </form>
      </section>
    </div>
  );
}
