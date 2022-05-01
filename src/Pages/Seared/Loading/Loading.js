import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div className="text-center mt-5 pt-5">
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" className="mx-3" />
      <Spinner animation="grow" variant="success"  className="mx-3"/>
      <Spinner animation="grow" variant="danger"  className="mx-3"/>
      <Spinner animation="grow" variant="warning" className="mx-3" />
      <Spinner animation="grow" variant="info"  className="mx-3"/>
      <Spinner animation="grow" variant="light" className="mx-3" />
    </div>
  );
};

export default Loading;