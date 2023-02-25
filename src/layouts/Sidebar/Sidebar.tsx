import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from './cn.module.css';
import APP_ROUTES from 'features/routing/constants/routes';
import { logout } from 'features/authentication/services/authSlice';
import { useAppDispatch } from '@/store/hooks';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  return (
    <nav className={cn.root} data-component="Sidebar">
      <div>John Doe</div>
      <div>
        <NavLink
          to={APP_ROUTES.users.href}
          className={({ isActive }) => (isActive ? cn.active : cn.navLink)}
        >
          Users
        </NavLink>
        <NavLink
          to={APP_ROUTES.products.href}
          className={({ isActive }) => (isActive ? cn.active : cn.navLink)}
        >
          Products
        </NavLink>
      </div>
      <div>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
    </nav>
  );
};

export default Sidebar;
