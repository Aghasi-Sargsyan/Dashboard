import React from 'react';
import cn from './cn.module.css';

const ErrorFallback = () => {
  return (
    <div className={cn.root} data-component="ErrorFallback">
      <p>Something went wrong please try again later or reload the page.</p>
      <button onClick={() => window.location.reload()}>Reload</button>
    </div>
  );
};

export default ErrorFallback;
