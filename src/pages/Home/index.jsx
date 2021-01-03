import Footer from 'Components/Footer';
import Navbar from 'Components/Navbar';
import Sidebar from 'Components/Sidebar';
import Overview from 'Components/Overview';
import React from 'react';
import homeIcon from 'Assets/img/home.svg';

import './style.scss';

const menuList = [
  {
    name: 'Home',
    icon: homeIcon,
    path: '/',
  },
  {
    name: 'Home',
    icon: homeIcon,
    path: '/1',
  },
  {
    name: 'Home',
    icon: homeIcon,
    path: '/1',
  },
  {
    name: 'Home',
    icon: homeIcon,
    path: '/1',
  },
  {
    name: 'Home',
    icon: homeIcon,
    path: '/1',
  },
];

function index() {
  const isAuth = JSON.parse(localStorage.getItem('isAuth'));

  return (
    <div className="home">
      <Navbar />
      <div className="sidebar-main-app">
        <Sidebar menu={menuList} />
        <div className="container-footer">
          <Overview />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default index;
