import aboutIcon from 'Assets/img/about.svg';
import portraitIcon from 'Assets/img/portrait.svg';
import monitorIcon from 'Assets/img/monitor.svg';
import focusIcon from 'Assets/img/focus.svg';
import sneakersIcon from 'Assets/img/sneakers.svg';
import billIcon from 'Assets/img/bill.svg';
import soldIcon from 'Assets/img/sold.svg';
import avatar from 'Assets/img/avatar.jpg';

import OrderChart from 'Components/OrderChart';
import PageTitle from 'Components/PageTitle';
import Tooltip from 'Components/Tooltip';
import CardOverview from 'Components/CardOverview';
import SimpleCard from 'Components/SimpleCard';
import TableProduct from 'Components/TableProduct';
import UnreadMessage from 'Components/UnreadMessage';
import { Scrollbars } from 'react-custom-scrollbars';

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
  { value: 'today', label: 'Today' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'year', label: 'Year' },
  { value: 'all', label: 'All' },
];

const dataTable = [
  {
    name: 'Airi Satou',
    brand: 'Nike',
    price: '3000000 VNĐ',
    among: 3,
    orderDate: '12/10/2020',
    totalPrice: '900000000 VNĐ',
  },
  {
    name: 'Airi Satou',
    brand: 'Nike',
    price: '3000000 VNĐ',
    among: 3,
    orderDate: '12/10/2020',
    totalPrice: '900000000 VNĐ',
  },
  {
    name: 'Airi Satou',
    brand: 'Nike',
    price: '3000000 VNĐ',
    among: 3,
    orderDate: '12/10/2020',
    totalPrice: '900000000 VNĐ',
  },
  {
    name: 'Airi Satou',
    brand: 'Nike',
    price: '3000000 VNĐ',
    among: 3,
    orderDate: '12/10/2020',
    totalPrice: '900000000 VNĐ',
  },
  {
    name: 'Airi Satou',
    brand: 'Nike',
    price: '3000000 VNĐ',
    among: 3,
    orderDate: '12/10/2020',
    totalPrice: '900000000 VNĐ',
  },
  {
    name: 'Airi Satou',
    brand: 'Nike',
    price: '3000000 VNĐ',
    among: 3,
    orderDate: '12/10/2020',
    totalPrice: '900000000 VNĐ',
  },
  {
    name: 'Airi Satou',
    brand: 'Nike',
    price: '3000000 VNĐ',
    among: 3,
    orderDate: '12/10/2020',
    totalPrice: '900000000 VNĐ',
  },
  {
    name: 'Airi Satou',
    brand: 'Nike',
    price: '3000000 VNĐ',
    among: 3,
    orderDate: '12/10/2020',
    totalPrice: '900000000 VNĐ',
  },
  {
    name: 'Airi Satou',
    brand: 'Nike',
    price: '3000000 VNĐ',
    among: 3,
    orderDate: '12/10/2020',
    totalPrice: '900000000 VNĐ',
  },
  {
    name: 'Airi Satou',
    brand: 'Nike',
    price: '3000000 VNĐ',
    among: 3,
    orderDate: '12/10/2020',
    totalPrice: '900000000 VNĐ',
  },
];

const messages = [
  {
    username: 'hainguyen0910',
    fullname: 'Hải Nguyên',
    avatar,
    messages: [
      {
        message: 'Hello, can you give me a Nike Jordan 1?',
        createAt: '12/10/2020 12:12:56',
      },
    ],
  },
  {
    username: 'hainguyen0910',
    fullname: 'Hải Nguyên',
    avatar,
    messages: [
      {
        message: 'Hello, can you give me a Nike Jordan 1?',
        createAt: '12/10/2020 12:12:56',
      },
    ],
  },
  {
    username: 'hainguyen0910',
    fullname: 'Hải Nguyên',
    avatar,
    messages: [
      {
        message: 'Hello, can you give me a Nike Jordan 1?',
        createAt: '12/10/2020 12:12:56',
      },
    ],
  },
  {
    username: 'hainguyen0910',
    fullname: 'Hải Nguyên',
    avatar,
    messages: [
      {
        message: 'Hello, can you give me a Nike Jordan 1?',
        createAt: '12/10/2020 12:12:56',
      },
    ],
  },
  {
    username: 'hainguyen0910',
    fullname: 'Hải Nguyên',
    avatar,
    messages: [
      {
        message: 'Hello, can you give me a Nike Jordan 1?',
        createAt: '12/10/2020 12:12:56',
      },
    ],
  },
  {
    username: 'hainguyen0910',
    fullname: 'Hải Nguyên',
    avatar,
    messages: [
      {
        message: 'Hello, can you give me a Nike Jordan 1?',
        createAt: '12/10/2020 12:12:56',
      },
    ],
  },
  {
    username: 'hainguyen0910',
    fullname: 'Hải Nguyên',
    avatar,
    messages: [
      {
        message: 'Hello, can you give me a Nike Jordan 1?',
        createAt: '12/10/2020 12:12:56',
      },
    ],
  },
  {
    username: 'hainguyen0910',
    fullname: 'Hải Nguyên',
    avatar,
    messages: [
      {
        message: 'Hello, can you give me a Nike Jordan 1?',
        createAt: '12/10/2020 12:12:56',
      },
    ],
  },
  {
    username: 'hainguyen0910',
    fullname: 'Hải Nguyên',
    avatar,
    messages: [
      {
        message: 'Hello, can you give me a Nike Jordan 1?',
        createAt: '12/10/2020 12:12:56',
      },
    ],
  },
  {
    username: 'hainguyen0910',
    fullname: 'Hải Nguyên',
    avatar,
    messages: [
      {
        message: 'Hello, can you give me a Nike Jordan 1?',
        createAt: '12/10/2020 12:12:56',
      },
    ],
  },
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
                content="This is a descriptive chart of order status by week, month or year."
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
              // scales: {
              //   xAxes: [
              //     {
              //       display: false,
              //     },
              //   ],
              //   yAxes: [
              //     {
              //       display: false,
              //     },
              //   ],
              // },
              responsive: true,
              maintainAspectRatio: false,
              aspectRatio: 1,
              tooltips: {
                mode: 'index',
                intersect: false,
              },
              plugins: {
                datalabels: {
                  display: 'auto',
                  color: 'black',
                  align: 'top',
                },
              },
            }}
          />
        </div>
        <div className="main-card bg-white d-flex flex-column justify-content-between align-items-center w-50">
          <div className="product-overview mb-5 w-100 d-flex justify-content-between align-items-center">
            <span className="title-chart-overview d-flex align-items-center">
              <span className="mr-2 title-chart-order">Product</span>
              <Tooltip
                content="Here's a quick overview of popular products for the week, month or year."
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
          <div className="d-flex w-100">
            <div className="left-cards w-50">
              <div className="card-box card-box-1 w-100 d-flex justify-content-between align-items-center">
                <CardOverview
                  icon={sneakersIcon}
                  stats={{ stat: '40,5k', percent: 175.5 }}
                  title="Sold"
                  content="NIKE AIR JORDAN 1 LOW X DIOR GREY"
                  trend="stat-compare"
                  color="primary"
                />
              </div>
              <div className="card-box card-box-2 w-100 d-flex justify-content-between align-items-center">
                <CardOverview
                  icon={focusIcon}
                  stats={{ stat: '40,5k', percent: 175.5 }}
                  title="Views"
                  content="NIKE AIR JORDAN 1 LOW X DIOR GREY"
                  trend="stat-up"
                  color="danger"
                />
              </div>
            </div>
            <div className="right-cards w-50">
              <div className="card-box card-box-3 w-100 d-flex justify-content-between align-items-center">
                <CardOverview
                  icon={soldIcon}
                  stats={{ stat: '40,5k', percent: 175.5 }}
                  title="Sold"
                  content="Total"
                  trend="stat-up"
                  color="success"
                />
              </div>
              <div className="card-box card-box-4 w-100 d-flex justify-content-between align-items-center">
                <CardOverview
                  icon={monitorIcon}
                  stats={{ stat: '40,5k', percent: 175.5 }}
                  title="Views"
                  content="Total"
                  trend="stat-down"
                  color="warning"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-revenue d-flex flex-column">
        <span className="title-chart-overview d-flex align-items-center mb-3">
          <span className="mr-2 title-chart-order">Revenue</span>
          <Tooltip
            content="This is a descriptive of revenue's shop is today."
            position="right"
          >
            <img src={aboutIcon} alt="" className="order-about-icon" />
          </Tooltip>
        </span>
        <div className="d-flex">
          <SimpleCard
            title="Orders Delivered"
            subtitle="Today"
            stat={1896}
            color="success"
          />
          <SimpleCard
            title="Revenue"
            subtitle="Today"
            stat="$ 18M"
            color="warning"
          />
          <SimpleCard
            title="Orders Canceled "
            subtitle="Today"
            stat={186}
            color="danger"
          />
        </div>
      </div>

      <div className="bg-white table-wrapper">
        <TableProduct
          title="Product list sold"
          data={dataTable}
          iconTitle={billIcon}
        />

        <div className="view-detail-table-product pb-3 d-flex justify-content-center">
          <div className="d-flex justify-content-center text-center rm-border w-50">
            <button
              className="btn btn-view-detail d-flex align-items-center justify-content-center w-25"
              type="button"
            >
              View detail <i className="arrow right" />
            </button>
          </div>
        </div>
      </div>

      <div className="card-revenue d-flex flex-column">
        <span className="title-chart-overview d-flex align-items-center mb-3">
          <span className="mr-2 title-chart-order">Messages</span>
          <Tooltip
            content="This is a descriptive of messages and its status by week, month or year."
            position="right"
          >
            <img src={aboutIcon} alt="" className="order-about-icon" />
          </Tooltip>
        </span>
        <div className="d-flex">
          <SimpleCard
            title="New Messages"
            subtitle="Today"
            stat={1896}
            color="success"
          />
          <SimpleCard
            title="Total Messages"
            subtitle="Today"
            stat="18M"
            color="warning"
          />
          <SimpleCard
            title="Unread Messages"
            subtitle="Today"
            stat={186}
            color="danger"
          />
        </div>
      </div>

      <div className="table-messages-unread-and-user-active">
        <div className="mr-2 d-flex align-items-center ">
          <span className="mr-2 title-chart-order">Unread Messages</span>
          <Tooltip
            content="This is a descriptive chart of order status by week, month or year."
            position="right"
          >
            <img src={aboutIcon} alt="" className="order-about-icon" />
          </Tooltip>
        </div>
        <div className="unread-messages-box w-50 mt-4">
          <Scrollbars style={{ width: '100%', height: '400px' }}>
            {messages.map((item, _index) => (
              <UnreadMessage data={item} key={_index} />
            ))}
          </Scrollbars>
        </div>
      </div>
    </div>
  );
}

export default index;
