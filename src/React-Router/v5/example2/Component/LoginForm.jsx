import React, { useRef } from 'react';

export default function LoginForm({ onSubmit }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const formData = {
      email,
      password,
    };

    onSubmit(formData);
  };

  return (
    <div>
      <form>
        <fieldset>
          <label htmlgor='email'>Email</label>
          <input
            placeholder='Enter email.'
            required
            ref={emailRef}
            id='email'
            type='email'
            name='email'
            autoComplete='off'
          />
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password</label>
          <input
            required
            ref={passwordRef}
            id='password'
            type='password'
            name='password'
            placeholder='Enter password.'
          />
        </fieldset>
        <button type='submit' onClick={submitForm}>
          Login
        </button>
      </form>
    </div>
  );
}
