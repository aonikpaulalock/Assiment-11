import React from 'react';
import carBody1 from "../../../Asset/Others/coupe-1.png"
import carBody2 from "../../../Asset/Others/coupe-2.png"
import carBody3 from "../../../Asset/Others/coupe-3.png"
import carBody4 from "../../../Asset/Others/coupe-4.png"
import carBody5 from "../../../Asset/Others/coupe-5.png"
import carBody6 from "../../../Asset/Others/coupe6.png"
import carBody7 from "../../../Asset/Others/coupe7.png"
const CarBody = () => {
  return (
    <div className='container my-5'>
      <div className="text-center">
        <h5 className='heading'>LOOKING MORE!</h5>
        <h1 className='fw-bold mb-5'>Explore By Body Type</h1>
        <div className="row g-4">
          <div className="col-md-3">
            <img src={carBody1} alt=""  className="img-fluid"/>
          </div>
          <div className="col-md-3">
            <img src={carBody2} alt=""  className="img-fluid"/>
          </div>
          <div className="col-md-3">
            <img src={carBody3} alt=""  className="img-fluid"/>
          </div>
          <div className="col-md-3">
            <img src={carBody4} alt=""  className="img-fluid"/>
          </div>
          <div className="col-md-4">
            <img src={carBody5} alt=""  className="img-fluid"/>
          </div>
          <div className="col-md-4">
            <img src={carBody6} alt=""  className="img-fluid"/>
          </div>
          <div className="col-md-4">
            <img src={carBody7} alt=""  className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarBody;