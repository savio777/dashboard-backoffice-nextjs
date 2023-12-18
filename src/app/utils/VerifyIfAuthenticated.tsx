'use client';

import Login from '../pages/auth/Login';
import DashBoard from '../pages/logged/DashBoard';
import useSession from '../store/Session';

const VerifyIfAuthenticated: React.FC = () => {
  const { isAuthenticated } = useSession();

  return !isAuthenticated ? <Login /> : <DashBoard />;
};

export default VerifyIfAuthenticated;
