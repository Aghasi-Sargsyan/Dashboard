import React, { InputHTMLAttributes } from 'react';
import cn from './cn.module.css';
import classNames from 'classnames';

type Props = {
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...rest }: Props) => {
  return <input className={classNames(cn.root, className)} {...rest} />;
};

export default Input;
