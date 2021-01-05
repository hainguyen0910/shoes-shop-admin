import React from 'react';

import './style.scss';

function index(props) {
  const { data } = props;
  const { username, fullname, avatar, messages } = data;
  return (
    <div className="d-flex align-items-center unread-message-wrapper p-3">
      <div className="img-avatar mr-3">
        <img src={avatar} alt="" />
      </div>
      <div className="position-relative">
        <div className="username-message">
          {fullname} - {username}
        </div>
        <div className="message-box">{messages[0].message}</div>
        <div className="badge badge-pill badge-danger position-absolute total-unread-message">
          5
        </div>
      </div>
    </div>
  );
}

export default index;
