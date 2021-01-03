import aboutIcon from 'Assets/img/about.svg';
import portraitIcon from 'Assets/img/portrait.svg';
import monitorIcon from 'Assets/img/monitor.svg';
import focusIcon from 'Assets/img/focus.svg';
import sneakersIcon from 'Assets/img/sneakers.svg';
import soldIcon from 'Assets/img/sold.svg';
import OrderChart from 'Components/OrderChart';
import PageTitle from 'Components/PageTitle';
import Tooltip from 'Components/Tooltip';
import CardOverview from 'Components/CardOverview';
import React from 'react';
import Select from 'react-select';

import './style.scss';

const ButtonTest = () => (
  <button className="btn btn-primary" type="button">
    Test
  </button>
);

const dataset = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      label: 'Total Order',
      data: [2478, 5267, 734, 784, 433, 500, 1000],
      borderColor: '#f5e35d',
      fill: false,
    },
    {
      label: 'Delivered',
      data: [1234, 3000, 100, 600, 333, 200, 500],
      borderColor: '#58a638',
      fill: false,
    },
    {
      label: 'Processing',
      data: [456, 2500, 546, 656, 789, 564, 914],
      borderColor: '#409eff',
      fill: false,
    },
    {
      label: 'Cancel',
      data: [312, 741, 124, 951, 753, 951, 753],
      borderColor: '#ff4f4f',
      fill: false,
    },
  ],
};

const optionsSelect = [
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'year', label: 'Year' },
];

function index() {
  // const handleOnChangType = (selectedOption) => {};

  return (
    <div>
      <PageTitle
        icon={portraitIcon}
        title="Overview"
        subtitle="This is the dashboard where we can see an overview of the shop's activities."
        actions={<ButtonTest />}
      />
      <div className="tab-animation mt-5 d-flex justify-content-between">
        <div className="overview-chart">
          <div className="title-and-select-type w-100 d-flex justify-content-between align-items-center mb-5">
            <span className="title-chart-overview d-flex align-items-center">
              <span className="mr-2 title-chart-order">Order</span>
              <Tooltip
                content="This is a descriptive chart of order status by week, month or year"
                position="right"
              >
                <img src={aboutIcon} alt="" className="order-about-icon" />
              </Tooltip>
            </span>
            <Select
              options={optionsSelect}
              className="w-25"
              defaultValue={optionsSelect[0]}
              // onChange={handleOnChangType}
            />
          </div>
          <OrderChart
            dataset={dataset}
            options={{
              title: {
                display: false,
              },
              legend: {
                display: true,
                position: 'bottom',
              },
              scales: {
                xAxes: [
                  {
                    display: false,
                  },
                ],
                yAxes: [
                  {
                    display: false,
                  },
                ],
              },
              // responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div className="main-card bg-white">
          <div className="left-cards">
            <div className="card-box card-box-1">
              <CardOverview
                icon={sneakersIcon}
                stats={{ stat: '40,5k', percent: 175.5 }}
                title="Sold"
                content="NIKE AIR JORDAN 1 LOW X DIOR GREY"
                trend="stat-compare"
              />
            </div>
            <div className="card-box card-box-2">
              <CardOverview
                icon={focusIcon}
                stats={{ stat: '40,5k', percent: 175.5 }}
                title="Views"
                content="NIKE AIR JORDAN 1 LOW X DIOR GREY"
                trend="stat-up"
              />
            </div>
          </div>
          <div className="right-cards">
            <div className="card-box card-box-3">
              <CardOverview
                icon={soldIcon}
                stats={{ stat: '40,5k', percent: 175.5 }}
                title="Views"
                trend="stat-up"
              />
            </div>
            <div className="card-box card-box-4">
              <CardOverview
                icon={monitorIcon}
                stats={{ stat: '40,5k', percent: 175.5 }}
                title="Sold"
                trend="stat-down"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
