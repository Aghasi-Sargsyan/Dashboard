import React from 'react';
import cn from './cn.module.css';

const ErrorFallback = () => {
  return (
    <>
      <p className={cn.root} data-component="ErrorFallback">
        Something went wrong please try again later or reload the page.
      </p>
      <button onClick={() => window.location.reload()}>Reload</button>
    </>
  );
};

export default ErrorFallback;
