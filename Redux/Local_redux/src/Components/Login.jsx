import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../Redux/Auth/Action';
import { useNavigate } from 'react-router-dom';

import { LOGIN_SUCCESS } from '../Redux/Auth/Action';

export const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isLoading, isError } = useSelector((store) => store.auth);

  const [userValue, setUserValue] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(userValue)).then((res) => {
      if (res.type === LOGIN_SUCCESS) {
        navigate('/');
      }
    });
  };

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (isError) {
    return <h1>Something went wrong....❌</h1>;
  }

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          height: '30vh',
          gap: '1rem',
        }}
      >
        <div>
          <label htmlFor="">email</label>{' '}
          <input
            type="text"
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label htmlFor="">password</label>{' '}
          <input
            type="text"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};