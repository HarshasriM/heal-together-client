import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  useEffect(()=>{
    if(!token)
        alert("Login to the Page Is Required")
  },[])
 
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
