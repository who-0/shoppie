/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink } from "@components";
import Menu from "./styles.component";
import {
  ADMIN_DASHBOARD,
  ADMIN_ORDERS,
  ADMIN_PRODUCTS,
  ADMIN_USERS,
} from "../../contexts/actions";
import { useContext, useState } from "react";
import { Context } from "../../contexts/AppContexts";

import { FaChartLine } from "react-icons/fa6";
import { BsFillBox2Fill } from "react-icons/bs";
import { HiMiniUsers } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";

const AdminMenu = ({ changeColor }) => {
  const { admin_status, admin_products, admin_users, admin_orders } =
    useContext(Context);
  const [isOpen, setIsOpen] = useState(true);
  const Navs = [
    {
      id: 1,
      name: "status",
      action: ADMIN_DASHBOARD,
      path: "/",
      isActive: admin_status,
      icon: <FaChartLine className="admin_icon" />,
    },
    {
      id: 2,
      name: "products",
      action: ADMIN_PRODUCTS,
      path: "/products",
      isActive: admin_products,
      icon: <BsFillBox2Fill className="admin_icon" />,
    },
    {
      id: 3,
      name: "users",
      action: ADMIN_USERS,
      path: "/users",
      isActive: admin_users,
      icon: <HiMiniUsers className="admin_icon" />,
    },
    {
      id: 4,
      name: "orders",
      action: ADMIN_ORDERS,
      path: "/orders",
      isActive: admin_orders,
      icon: <FaCartShopping className="admin_icon" />,
    },
  ];

  return (
    <Menu isopen={+isOpen}>
      <div className="menu_icon" onClick={(_) => setIsOpen(!isOpen)}>
        {isOpen ? <RiMenuFoldFill /> : <RiMenuUnfoldFill />}
      </div>
      {Navs.map((nav) => (
        <NavLink
          key={nav.id}
          name={nav.name}
          action={nav.action}
          path={`/admin${nav.path}`}
          active={nav.isActive}
          changeColor={changeColor}
          icon={nav.icon}
          isOpen={isOpen}
        />
      ))}
    </Menu>
  );
};

export default AdminMenu;
