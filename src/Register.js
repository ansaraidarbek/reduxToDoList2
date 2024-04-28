import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from './userSlice';

function Register() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    dispatch(registerUser(username));
    navigate('/todos');
  };

  return (
    <div>
      <h2>Sign up</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button onClick={handleRegister}>Sign up</button>
    </div>
  );
}

export default Register;
