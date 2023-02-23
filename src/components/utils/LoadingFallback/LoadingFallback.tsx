import React from 'react';
import cn from './cn.module.css';

const LoadingFallback = () => {
  return (
    <p className={cn.root} data-component="Fallback">
      Loading...
    </p>
  );
};

export default LoadingFallback;
