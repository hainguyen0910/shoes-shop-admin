import React from 'react';
import PageTitle from 'Components/PageTitle';
import portraitIcon from 'Assets/img/portrait.svg';

const ButtonTest = () => (
  <button className="btn btn-primary" type="button">
    Test
  </button>
);

function index() {
  return (
    <div>
      <PageTitle
        icon={portraitIcon}
        title="Overview"
        subtitle="This is the dashboard where we can see an overview of the shop's activities."
        actions={<ButtonTest />}
      />
    </div>
  );
}

export default index;
