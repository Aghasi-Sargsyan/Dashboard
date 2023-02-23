import React from 'react';
import cn from './cn.module.css';
import { useNavigate } from 'react-router-dom';

const NoPage = () => {
  const navigate = useNavigate();

  return (
    <div className={cn.root} data-component="NoPage">
      <div>You&apos;ve landed on a wrong planet: 404</div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default NoPage;
