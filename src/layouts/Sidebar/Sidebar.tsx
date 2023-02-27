import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from './cn.module.css';
import APP_ROUTES from 'features/routing/constants/routes';
import { logout, selectUser } from 'features/authentication/services/authSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import classNames from 'classnames';
import { Button } from 'components/ui';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  return (
    <aside className={cn.root} data-component="Sidebar">
      <div className={cn.container}>
        <div className={cn.name}>{user?.name}</div>
        <nav className={cn.nav}>
          <NavLink
            to={APP_ROUTES.users.href}
            className={({ isActive }) =>
              isActive ? classNames(cn.navLink, cn.active) : cn.navLink
            }
          >
            Users
          </NavLink>
          <NavLink
            to={APP_ROUTES.products.href}
            className={({ isActive }) =>
              isActive ? classNames(cn.navLink, cn.active) : cn.navLink
            }
          >
            Products
          </NavLink>
        </nav>
      </div>
      <div className={cn.logoutWrapper}>
        <Button onClick={() => dispatch(logout())}>Logout</Button>
      </div>
    </aside>
  );
};

export default Sidebar;
