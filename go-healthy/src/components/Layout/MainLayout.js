import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HeaderUser from '../Header/Headeruser.jsx';
import HeaderAdmin from '../../components/admin/Component/Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import AdminRoutes from '../../routes/AdminRouters';
import Routers from '../../routes/Routers';
import Carts from '../UI/cart/Carts.jsx';
import { useSelector } from 'react-redux';

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  const location = useLocation();

  // Memeriksa apakah berada di area admin
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div>
      {isAdmin ? <HeaderAdmin /> : <HeaderUser />}

      {showCart && <Carts />}

      <Routes>
        {isAdmin ? (
          // Area admin
          <Route path="/*" element={<AdminRoutes />} />
        ) : (
          // Area user
          <Route path="/*" element={<Routers />} />
        )}
        {/* Redirect ke halaman sesuai isAdmin */}
        <Route
          path="/"
          element={<Navigate to={isAdmin ? '/admin' : '/home'} />}
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default Layout;
