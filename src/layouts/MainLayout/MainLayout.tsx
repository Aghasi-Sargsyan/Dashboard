import React, { ReactNode } from 'react';
import cn from './cn.module.css';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { APPLICATION_NAME } from 'features/routing/constants/seo';

type Props = {
  title: string;
  description: string;
  canonicalUrl?: string;
  children: ReactNode;
};

const MainLayout = ({ title, description, canonicalUrl, children }: Props) => {
  const location = useLocation();

  return (
    <div className={cn.root} data-component="MainLayout">
      <Helmet>
        <title>
          {title} | {APPLICATION_NAME}
        </title>
        <meta name="description" content={description} />
        {canonicalUrl && <link rel="canonical" href={`${canonicalUrl}/${location.pathname}`} />}
      </Helmet>
      {children}
    </div>
  );
};

export default MainLayout;
