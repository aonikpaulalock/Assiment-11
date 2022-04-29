import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Inventory from './Pages/Home/Inventory/Inventory';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Seared/Header/Header';

function App() {
  return (
    <div>
      <Header/>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/inventory" element={<Inventory/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
     </Routes>
    </div>
  );
}

export default App;

// Website Insprision
// Finally
// https://listing.maxwheelswp.com/home-4/
//https://listing.maxwheelswp.com/main-home/


// https://preview.themeforest.net/item/automotive-car-dealership-business-wordpress-theme/full_screen_preview/9210971?_ga=2.235336515.33704252.1651158121-1454372749.1650119627

// https://creativemarket.com/knighthemes/1649454-Auto-Modern-car-rental-service-PSD?u=wpthemesdaddy%3Futm_source%3DPinterest&utm_medium=CM+Social+Share&utm_campaign=Category+Social+Share&utm_content=Popular+Website+Templates+~+Creative+Market&epik=dj0yJnU9TEQ0NmRIOVZDN0dQVndMNXp4dlNIN0VsNkJwdW9sSmEmcD0wJm49TEZUZXZvd3d2VG0yT1FZTHc2MXVPZyZ0PUFBQUFBR0pxd0lz