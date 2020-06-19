import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../../images/menu.svg';

const SignInLinks = () => {
  return (
    <div
      className="navbar"
      style={{
        backgroundColor: '#5744ed',
        color: 'white',
        margin: '0px',
      }}
    >
      <h2>YourVote</h2>

      <div class="dropdown dropleft">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ backgroundColor: '#5744ed', border: '0px' }}
        >
          <img src={menu} alt="menu" height="24" style={{ width: '24px' }} />
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-menu-items">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/build">Build</Link>
            <button
              style={{
                color: 'white',
                backgroundColor: '#5744ed',
                border: '1px solid white',
                borderRadius: '20px',
              }}
            >
              <Link to="/">Logout</Link>
            </button>
          </div>
        </div>
      </div>

      <ul className="desktop">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/build">Build new form</Link>
        </li>
        <li>
          <button
            style={{
              color: 'white',
              backgroundColor: '#5744ed',
              border: '1px solid white',
              borderRadius: '20px',
            }}
          >
            <Link to="/">Logout</Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SignInLinks;
