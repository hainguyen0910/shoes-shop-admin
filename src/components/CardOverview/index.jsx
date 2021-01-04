import React from 'react';

import compareIcon from 'Assets/img/compare.svg';
import downIcon from 'Assets/img/down-chevron.svg';
import upIcon from 'Assets/img/up-chevron.svg';

import './style.scss';

function index(props) {
  const { icon, stats, title, content, trend, color } = props;
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-3 px-2 card-wrapper">
      <div className={`icon-card ${color}`}>
        <img src={icon} alt="" />
      </div>
      <div className="stats-overview d-flex flex-column align-items-center justify-content-between mt-3">
        {content && <div className="content-card">{content}</div>}
        <div className="stat">{stats.stat}</div>
        <div className="title-stat">{title}</div>
        <div className={`stat-percent d-flex align-items-center ${trend}`}>
          {trend === 'stat-compare' && <img src={compareIcon} alt="" />}
          {trend === 'stat-up' && <img src={upIcon} alt="" />}
          {trend === 'stat-down' && <img src={downIcon} alt="" />}
          <span className="ml-2">{stats.percent}%</span>
        </div>
      </div>
    </div>
  );
}

export default index;
