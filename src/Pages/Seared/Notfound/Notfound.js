import React from 'react';
import { useNavigate } from 'react-router-dom';
import notfound from '../../../Asset/Social/notFound.png'
const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <div className="row my-5">
        <div className="col-lg-6 order-2 order-md-1">
          <div className="mt-5">
            <h1 className="text-black ms-2 fs-1">Page are not found....<span className="text-danger fw-bold"> 404 </span></h1>
            <p className="text-muted ms-2 py-2">Somethings went wrong . Please try again later or click bellow button and go to home..</p>
            <div>
              <button className='All-Button' onClick={() => navigate('/')}>Back-Home</button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-md-2">
          <img src={notfound} alt="" className='img-fluid' />
        </div>
      </div>
    </div>
  );
};

export default Notfound;