'use client';

import { ReactNode } from 'react';
import Login from '../pages/auth/Login';
import useSession from '../store/Session';

interface IVerifyIfAuthenticatedProps {
  children: ReactNode;
}

const VerifyIfAuthenticated: React.FC<IVerifyIfAuthenticatedProps> = ({
  children,
}) => {
  const { isAuthenticated } = useSession();

  if (!isAuthenticated) return <Login />;

  return children;
};

export default VerifyIfAuthenticated;
