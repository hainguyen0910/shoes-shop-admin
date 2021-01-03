import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Tooltip from 'Components/Tooltip';
import './style.scss';

function index(props) {
  const { menu } = props;
  const [isActiveNavbar, setIsActiveNavbar] = useState(false);

  const renderMenu = (_menu) => {
    let xhtml = null;
    xhtml = _menu.map((item, index1) => (
      <Tooltip key={index1} content="hello" position="bottom">
        <NavLink
          className="menu-item d-flex align-items-center p-1 mt-2 btn 123"
          activeClassName="active"
          to={item.path}
        >
          <img src={item.icon} alt="" className="menu-icon mr-2 ml-3" />
          <span>{item.name}</span>
        </NavLink>
      </Tooltip>
    ));
    return xhtml;
  };

  return (
    <div
      className={`left-sidebar d-flex flex-column ${
        isActiveNavbar && 'expanded'
      }`}
    >
      <button
        className={`hamburger w-25 hamburger--elastic ${
          isActiveNavbar && 'is-active'
        }`}
        type="button"
        onClick={() => setIsActiveNavbar(!isActiveNavbar)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>

      <div className="list-sidebar-menu">{renderMenu(menu)}</div>
    </div>
  );
}

export default index;
