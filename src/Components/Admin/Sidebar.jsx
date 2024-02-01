import React from 'react';
import './Sidebar.css';
import { Outlet, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => handleNavigate('home')}>DASHBOARD</li>
        <li onClick={() => handleNavigate('languages')}>LANGUAGES</li>
        <li onClick={() => handleNavigate('movies')}>MOVIES</li>
        <li onClick={() => handleNavigate('student')}>SHOW TIMING</li>
        <li onClick={() => handleNavigate('certificate')}>HOMEPAGE</li>
        <li onClick={() => handleNavigate('studentview')}>USERS</li>
        <li onClick={() => handleNavigate('certificateview')}>BOOKING</li>
        <li onClick={() => handleNavigate('updatepassword')}>UPDATE PASSWORD</li>
      </ul>
    </div>
  );
};

export default Sidebar;
