'use client';

import useNotifications, { INotification } from '@/store/Notifications';
import { useEffect } from 'react';

const mockNotifications: INotification[] = [
  {
    id: 'c6367cf8-9f7c-4f89-97a1-e2e1d5ff94e2',
    title: 'New order',
    datetime: '13 minutes ago',
    description: 'Vivian Howell PhD ordered 5 products.',
    opened: false,
  },
  {
    id: 'b08b8bf6-32eb-456e-9db4-cfbc28bf5d90',
    title: 'New order',
    datetime: '13 minutes ago',
    description: 'Vivian Howell PhD ordered 5 products.',
    opened: false,
  },
  {
    id: 'c71ef8a8-de22-47e9-acae-f4c49afdc955',
    title: 'New order',
    datetime: '13 minutes ago',
    description: 'Vivian Howell PhD ordered 5 products.',
    opened: true,
  },
  {
    id: 'cf841a75-c6a7-41cc-9b81-02df50369983',
    title: 'New order',
    datetime: '13 minutes ago',
    description: 'Vivian Howell PhD ordered 5 products.',
    opened: true,
  },
];

export default function DashBoard() {
  const { updateNotifications } = useNotifications();

  useEffect(() => {
    updateNotifications(mockNotifications);
  }, [updateNotifications]);

  return (
    <div className='flex flex-1 overflow-y-auto bg-grey-100 px-8'>
      <h2 className='text-grey-900 text-3xl font-bold my-10'>Dashboard</h2>
    </div>
  );
}
