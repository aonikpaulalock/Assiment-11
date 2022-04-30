import React from 'react';
import Banner from '../Banner/Banner';
import TrustedDeller from '../TrustedDeller/TrustedDeller';
import Inventory from "../Inventory/Inventory"
import CarBody from '../CarBody/CarBody';
const Home = () => {
  return (
    <div>
      <Banner/>
      <TrustedDeller/>
      <Inventory/>
      <CarBody/>
    </div>
  );
};

export default Home;