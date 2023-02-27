import React, { ReactNode } from 'react';
import cn from './cn.module.css';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { APPLICATION_NAME } from 'features/routing/constants/seo';
import { selectIsAuthenticated } from 'features/authentication/services/authSlice';
import Sidebar from 'layouts/Sidebar/Sidebar';
import { useAppSelector } from '@/store/hooks';
import classNames from 'classnames';

type Props = {
  title: string;
  description: string;
  canonicalUrl?: string;
  children: ReactNode;
  heading?: string;
};

const MainLayout = ({ title, description, canonicalUrl, children, heading }: Props) => {
  const location = useLocation();
  const isLoggedIn = useAppSelector(selectIsAuthenticated);

  return (
    <>
      <Helmet>
        <title>
          {title} | {APPLICATION_NAME}
        </title>
        <meta name="description" content={description} />
        {canonicalUrl && <link rel="canonical" href={`${canonicalUrl}/${location.pathname}`} />}
      </Helmet>
      <div
        className={classNames(cn.root, {
          [cn.authed]: isLoggedIn,
        })}
        data-component="MainLayout"
      >
        {isLoggedIn && <Sidebar />}
        <main className={cn.main}>
          <h1>{heading || title}</h1>
          {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
