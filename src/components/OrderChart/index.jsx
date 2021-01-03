import React from 'react';
import { Line } from 'react-chartjs-2';
import './style.scss';

function index(props) {
  const { dataset, options } = props;

  return (
    <div className="line">
      <Line data={dataset} width="100%" options={options} />
    </div>
  );
}

export default index;
