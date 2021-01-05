import React from 'react';
import Select from 'react-select';
import frequencyIcon from 'Assets/img/frequency.svg';
import aboutIcon from 'Assets/img/about.svg';

import Tooltip from 'Components/Tooltip';
import { Table } from 'reactstrap';

import './style.scss';

const optionsSelect = [
  { value: 'today', label: 'Today' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'year', label: 'Year' },
  { value: 'all', label: 'All' },
];

function index(props) {
  const { title, data, iconTitle } = props;

  const renderDataTable = (_data) => {
    let xhtml = null;
    xhtml = _data.map((item, _index) => (
      <tr key={_index} className={(_index + 1) % 2 !== 0 ? 'even' : ''}>
        <th scope="row" className="text-center">
          {_index + 1}
        </th>
        <td>{item.name}</td>
        <td>{item.brand}</td>
        <td>{item.price}</td>
        <td>{item.among}</td>
        <td>{item.orderDate}</td>
        <td>{item.totalPrice}</td>
      </tr>
    ));
    return xhtml;
  };

  return (
    <div className="table-product-list bg-white mt-5">
      <div className="title-table d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center w-75">
          <div className="title-icon-wrapper ">
            <img
              src={!iconTitle ? frequencyIcon : iconTitle}
              alt=""
              className="title-table-icon"
            />
          </div>
          <div className="d-flex align-items-center">
            <span className="mx-2">{title}</span>
            <Tooltip
              content="This is a descriptive of messages and its status by week, month or year."
              position="right"
            >
              <img src={aboutIcon} alt="" className="order-about-icon" />
            </Tooltip>
          </div>
        </div>

        <div className="w-25 d-flex justify-content-end">
          <div className="d-flex align-items-center mr-4">
            <h5 className="mr-2">Search:</h5>
            <input type="search" className="form-control" />
          </div>
          <Select
            options={optionsSelect}
            className="w-50"
            defaultValue={optionsSelect[0]}
            // onChange={handleOnChangType}
          />
        </div>
      </div>

      <Table>
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Among</th>
            <th>Order Date</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>{renderDataTable(data)}</tbody>
      </Table>
    </div>
  );
}

export default index;
