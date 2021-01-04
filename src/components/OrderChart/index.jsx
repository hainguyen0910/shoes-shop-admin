import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import './style.scss';

function index(props) {
  const { dataset, options } = props;

  return (
    <div className="line d-flex align-items-center justify-content-center ">
      <Line data={dataset} height={526} options={options} />
    </div>
  );
}

export default index;
