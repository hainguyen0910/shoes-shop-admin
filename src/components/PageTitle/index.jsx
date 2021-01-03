import React from 'react';

import './style.scss';

function index(props) {
  const { title, icon, subtitle, actions } = props;
  return (
    <div className="app-page-title">
      <div className="page-title-wrapper">
        <div className="page-title-heading">
          <div className="page-title-icon">
            <img src={icon} alt="" />
          </div>
          <div>
            <span className="page-title">{title}</span>
            <div className="page-title-subheading">
              <span>{subtitle}</span>
            </div>
          </div>
        </div>
        {actions && <div className="page-title-actions">{actions}</div>}
      </div>
    </div>
  );
}

export default index;
