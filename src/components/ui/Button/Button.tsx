import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from './cn.module.css';
import classNames from 'classnames';

type Props = { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, children, ...rest }: Props) => {
  return (
    <button className={classNames(cn.root, className)} data-component="Button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
