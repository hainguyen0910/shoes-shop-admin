import React, { useState } from 'react';
import './style.scss';

function index(props) {
  const { content, children, position } = props;
  const [show, setShow] = useState(false);

  const handleHoverIn = () => {
    setShow(true);
  };

  const handleHoverOut = () => {
    setShow(false);
  };

  return (
    <div
      className="tooltip-handle"
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
    >
      {show && <div className={`tooltip-content ${position}`}>{content}</div>}
      {children}
    </div>
  );
}

export default index;
