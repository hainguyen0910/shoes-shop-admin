import React from 'react';
import Tooltip from 'Components/Tooltip';

import './style.scss';

function index(props) {
  const { width, height, color, title, data, count } = props;
  return (
    <div className="d-flex flex-column align-items-center justify-content-end p-5">
      <div className="info-top-rank">
        <Tooltip content={data.username} position="top">
          <img src={data.avatar} alt="" className="box-shadow-light" />
        </Tooltip>
      </div>
      <div
        className="bar-chart d-flex justify-content-center align-items-center box-shadow-light "
        style={{ width, height, backgroundColor: color }}
      >
        <div className="among-bought w-100 d-flex justify-content-center align-items-center">
          {count}
        </div>
      </div>
      <div className="bar-chart-title mt-2 ">{title}</div>
      <div className="bar-chart-fullname mt-2 ">{data.fullname}</div>
    </div>
  );
}

export default index;
