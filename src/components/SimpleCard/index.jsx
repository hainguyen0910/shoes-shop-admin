import React from 'react';
import './style.scss';

function index(props) {
  const { title, subtitle, stat, color } = props;
  return (
    <div className="col-md-6 col-xl-4">
      <div className="widget-content">
        <div className="widget-content-wrapper d-flex align-items-center position-relative">
          <div className="widget-content-right ml-0 mr-3">
            <div className={`widget-numbers text-${color}`}>{stat}</div>
          </div>
          <div className="widget-content-left">
            <div className="widget-heading">{title}</div>
            <div className="widget-subheading">{subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
