import React from 'react';
import cn from './cn.module.css';
import { FormEventHandler, useState } from 'react';
import { Input } from 'components/ui';

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
      <label>
        Username
        <Input
          type="text"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          aria-label="Username"
          required
        />
      </label>

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        aria-label="Password"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
