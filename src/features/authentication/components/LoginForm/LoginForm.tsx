import React from 'react';
import cn from './cn.module.css';
import { FormEventHandler, useState } from 'react';
import { Button, Input } from 'components/ui';

type OnSubmitArgs = {
  username: string;
  password: string;
};

type Props = {
  onSubmit: ({ username, password }: OnSubmitArgs) => void;
};

const LoginForm = ({ onSubmit }: Props) => {
  //also, wee can use useRef hook to prevent re-rendering
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (username && password) {
      onSubmit({ username, password });
    }
    //TODO handle error
  };

  return (
    <form className={cn.root} onSubmit={handleSubmit} data-component="LoginForm">
      <label className={cn.label}>
        <span>Username</span>
        <Input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
          required
        />
      </label>

      <label className={cn.label}>
        <span>Password</span>
        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          required
        />
      </label>
      <Button className={cn.submit} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;
