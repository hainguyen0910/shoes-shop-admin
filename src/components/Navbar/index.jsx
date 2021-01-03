import notificationIcon from 'Assets/img/bell.svg';
import logoIcon from 'Assets/img/logo2.png';
import userIcon from 'Assets/img/user.svg';
import React, { useState } from 'react';
import './style.scss';

function index() {
  const [isActive, setIsActive] = useState(false);
  const [isActiveNavbar, setIsActiveNavbar] = useState(false);

  return (
    <div className="navbar-wrapper p-1">
      <div className="logo-sidebar d-flex w-25 justify-content-around align-items-center">
        <img src={logoIcon} className="logo" alt="" />
      </div>

      <div className="nav-btn d-flex w-50 justify-content-between align-items-center pl-4">
        <div className="w-75 d-flex align-items-center search">
          <div className={`search-wrapper ${isActive && 'active'}`}>
            <div className="input-holder">
              <input
                type="text"
                className="search-input"
                placeholder="Search for something"
              />
              <button
                className="search-icon"
                type="button"
                onClick={() => setIsActive(true)}
              >
                <span />
              </button>
            </div>
            <button
              className="close"
              type="button"
              onClick={() => setIsActive(false)}
            >
              {' '}
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-around w-25 align-items-center">
          <div className="d-flex flex-column">
            {/* <span className="title-menu">GRID MENU</span>
            <div className="content-menu d-flex justify-content-between">
              <div className="w-25 bg-primary">c1</div>
              <div className="w-25 bg-primary">c1</div>
              <div className="w-25 bg-primary">c1</div>
              <div className="w-25 bg-primary">c1</div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="user-info d-flex align-items-center w-25 justify-content-center">
        <div className=" d-flex align-items-center justify-content-center w-75 d-1">
          <div className="notification d-flex align-items-center justify-content-center mr-2">
            <img src={notificationIcon} alt="" />
          </div>
          <div className="img-user-wrapper d-flex align-items-center justify-content-center">
            <img src={userIcon} className="userIcon" alt="" />
          </div>
          <div className="username-wrapper">
            <p className="username">Admin</p>
            <p className="fullname">Hải Nguyên</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
