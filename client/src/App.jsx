import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Auth,
  Orders,
  Profile,
  Shop,
  ProtectedPage,
  Navigation,
} from "pages";

import {
  AdminDashboard,
  AdminOrders,
  AdminProducts,
  AdminUsers,
  AdminShareLayout,
} from "pages/admin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="orders" element={<Orders />} />
          <Route path="shop" element={<Shop />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="admin"
            element={
              <ProtectedPage>
                <AdminShareLayout />
              </ProtectedPage>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="users" element={<AdminUsers />} />
          </Route>
          <Route path="*" element={<div>Error</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
