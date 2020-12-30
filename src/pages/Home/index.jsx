import React from 'react';
import { Link } from 'react-router-dom';

function index() {
  const isAuth = JSON.parse(localStorage.getItem('isAuth'));
  return (
    <div className="container">
      this is home page
      {!isAuth && <Link to="/login">Login</Link>}
    </div>
  );
}

export default index;
