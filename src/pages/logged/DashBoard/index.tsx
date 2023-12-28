'use client';

import useNotifications from '@/store/Notifications';
import useSession from '@/store/Session';
import { useEffect } from 'react';
import Apresentation from './components/Apresentation';
import { mockNotifications } from './mock';

export default function DashBoard() {
  const { updateNotifications } = useNotifications();
  const { initialsName, name, logout } = useSession();

  useEffect(() => {
    updateNotifications(mockNotifications);
  }, [updateNotifications]);

  const handleNavigateToDoc = () => {
    window.open(
      'https://github.com/savio777/dashboard-backoffice-nextjs',
      '_blank'
    );
  };

  return (
    <main className='flex flex-1 flex-col overflow-y-auto bg-grey-100 px-8'>
      <h2 className='text-grey-900 text-3xl font-bold my-10'>Dashboard</h2>

      <div className='flex gap-8'>
        <Apresentation
          title={name}
          subtitle='Deslogar'
          initials={initialsName}
          onClick={logout}
        />

        <Apresentation
          variant='doc'
          subtitle='Documnetação • GitHub'
          initials={initialsName}
          onClick={handleNavigateToDoc}
        />
      </div>
    </main>
  );
}
