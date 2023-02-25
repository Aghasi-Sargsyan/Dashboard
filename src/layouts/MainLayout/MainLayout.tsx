import React, { ReactNode } from 'react';
import cn from './cn.module.css';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { APPLICATION_NAME } from 'features/routing/constants/seo';
import { selectIsAuthenticated } from 'features/authentication/services/authSlice';
import Sidebar from 'layouts/Sidebar/Sidebar';
import { useAppSelector } from '@/store/hooks';

type Props = {
  title: string;
  description: string;
  canonicalUrl?: string;
  children: ReactNode;
};

const MainLayout = ({ title, description, canonicalUrl, children }: Props) => {
  const location = useLocation();
  const isLoggedIn = useAppSelector(selectIsAuthenticated);

  return (
    <main className={cn.root} data-component="MainLayout">
      <Helmet>
        <title>
          {title} | {APPLICATION_NAME}
        </title>
        <meta name="description" content={description} />
        {canonicalUrl && <link rel="canonical" href={`${canonicalUrl}/${location.pathname}`} />}
      </Helmet>
      {isLoggedIn && <Sidebar />}
      {children}
    </main>
  );
};

export default MainLayout;
