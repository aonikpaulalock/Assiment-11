import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/SignUp/SignUp';
import Footer from './Pages/Seared/Footer/Footer';
import Header from './Pages/Seared/Header/Header';
import Notfound from './Pages/Seared/Notfound/Notfound';
import RequireAuth from './Pages/Seared/RequireAuth/RequireAuth';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import InventoryDetails from './Pages/InventoryDetails/InventoryDetails';
import AddItems from './Pages/AddItems/AddItems';
import MyItems from './Pages/MyItems/MyItems';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/inventory/:id" element=
          {
            <RequireAuth>
              <InventoryDetails />
            </RequireAuth>
          }>

        </Route>
        {/* <Route path="/inventory/manageProduct" element=
          {
            <RequireAuth>
              <ManageProducts />
            </RequireAuth>
          }>

        </Route> */}
        <Route path="/inventory/manageProduct" element={
          <RequireAuth>
            <ManageProducts/>
          </RequireAuth>
        }></Route>
        <Route path="/inventory/manageProduct/AddItem" element=
          {
            <RequireAuth>
              <AddItems/>
            </RequireAuth>
          }>

        </Route>
        <Route path="/inventory/manageProduct/AddItem/myItems" element=
          {
            <RequireAuth>
              <MyItems/>
            </RequireAuth>
          }>

        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

// Website Insprision
// Finally
// 
//https://listing.maxwheelswp.com/main-home/


// https://preview.themeforest.net/item/automotive-car-dealership-business-wordpress-theme/full_screen_preview/9210971?_ga=2.235336515.33704252.1651158121-1454372749.1650119627

// https://creativemarket.com/knighthemes/1649454-Auto-Modern-car-rental-service-PSD?u=wpthemesdaddy%3Futm_source%3DPinterest&utm_medium=CM+Social+Share&utm_campaign=Category+Social+Share&utm_content=Popular+Website+Templates+~+Creative+Market&epik=dj0yJnU9TEQ0NmRIOVZDN0dQVndMNXp4dlNIN0VsNkJwdW9sSmEmcD0wJm49TEZUZXZvd3d2VG0yT1FZTHc2MXVPZyZ0PUFBQUFBR0pxd0lz