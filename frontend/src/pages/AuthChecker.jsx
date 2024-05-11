// AuthChecker.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthChecker = ({ userType }) => {
  const isAuthenticated = localStorage.getItem(userType);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, []);

  return null;
};

export default AuthChecker;
