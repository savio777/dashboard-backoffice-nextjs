'use client';

import useNotifications from '@/store/Notifications';
import useSession from '@/store/Session';
import { useEffect } from 'react';
import CardApresentation from './components/CardApresentation';
import CardChartSmall from './components/CardChartSmall';
import { mockDashboard, mockNotifications } from './mock';

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

      <div className='flex flex-col gap-8'>
        <div className='flex gap-8'>
          <CardApresentation
            title={name}
            subtitle='Deslogar'
            initials={initialsName}
            onClick={logout}
          />

          <CardApresentation
            variant='doc'
            subtitle='Documnetação • GitHub'
            initials={initialsName}
            onClick={handleNavigateToDoc}
          />
        </div>

        <div className='flex gap-8'>
          <CardChartSmall
            title='Receita'
            descriptionValue={
              mockDashboard.chartsSmall.revenue.descriptionValue
            }
            value={mockDashboard.chartsSmall.revenue.value}
          />

          <CardChartSmall
            variant='decrease'
            title='Novos clientes'
            descriptionValue={
              mockDashboard.chartsSmall.newCustomers.descriptionValue
            }
            value={mockDashboard.chartsSmall.newCustomers.value}
          />

          <CardChartSmall
            title='Novas ordens'
            descriptionValue={
              mockDashboard.chartsSmall.newOrders.descriptionValue
            }
            value={mockDashboard.chartsSmall.newOrders.value}
          />
        </div>
      </div>
    </main>
  );
}
