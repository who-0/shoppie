import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Auth,
  Orders,
  Profile,
  Shop,
  ProtectedPage,
  Navigation,
  PageShareLayout,
} from "pages";

import {
  AdminDashboard,
  AdminOrders,
  AdminProducts,
  AdminUsers,
  AdminShareLayout,
} from "pages/admin";
import { Context } from "contexts/AppContexts";

let isAdmin

const App = () => {
  const {user} = useContext(Context);
  if(user) { isAdmin = user.role === 'admin' ? user.role : null;}
  else isAdmin = 'noraml';

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="shop" element={<Shop />} />
          <Route
            path="user"
            element={
              <ProtectedPage>
                <PageShareLayout />
              </ProtectedPage>
            }
          >
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        {isAdmin === 'admin' && (
          <Route
            path="admin"
            element={
              <ProtectedPage>
                <AdminShareLayout />
              </ProtectedPage>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="orders" element={<AdminOrders />} />
          </Route>
        )}
          <Route path="*" element={<div>Error</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
