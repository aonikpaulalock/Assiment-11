import React from 'react';
import "../../Styles/Banner.css"
import banner from "../../../Asset/Banner/banner.png"
const Banner = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 order-2 order-md-1">
          <div className='content'>
            <h1>We connected <span>1500+</span><br></br>buyers with sellers last month</h1>
            <p>Preference themselves me as thoroughly partiality considered on in estimating. Middletons acceptance discovered projecting </p>
            <div className="">
              <button className="All-Button">View All Inventory</button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-md-2">
          <img src={banner} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Banner;