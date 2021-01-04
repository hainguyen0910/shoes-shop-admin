import Tooltip from 'Components/Tooltip';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

function index(props) {
  const { menu, isExpanded, setIsExpanded } = props;

  const renderMenu = (_menu) => {
    let xhtml = null;
    xhtml = _menu.map((item, index1) => (
      <Tooltip key={index1} content="hello" position="right">
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
      className={`left-sidebar d-flex flex-column ${isExpanded && 'expanded'}`}
    >
      <button
        className={`hamburger w-25 hamburger--elastic ${
          isExpanded && 'is-active'
        }`}
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
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
