import Badge from '@/components/atom/Badge';
import useNotifications from '@/store/Notifications';
import useSession from '@/store/Session';
import { HiMagnifyingGlass, HiOutlineBell } from 'react-icons/hi2';

const Header: React.FC = () => {
  const { initialsName } = useSession();
  const { notifications, openModalNotifications } = useNotifications();

  return (
    <div className='flex h-16 bg-white border border-grey-200 items-center justify-end px-8 py-3 gap-4'>
      <div className='flex px-3.5 py-2 gap-3.5 bg-grey-100 h-10 w-50 rounded-lg items-center text-grey-500 text-lg'>
        <HiMagnifyingGlass />

        <input
          className='hover:border-none w-full bg-grey-100 text-grey-600 placeholder:text-grey-500'
          placeholder='Pesquisar'
        />
      </div>

      <button
        className='flex items-center justify-center h-10 text-primary-500 text-lg'
        onClick={openModalNotifications}
      >
        <HiOutlineBell />
        <div className='mb-4 ml-0.5'>
          <Badge padding='px-1' variant='primary-500'>
            {notifications.filter((item) => !item.opened).length}
          </Badge>
        </div>
      </button>

      <button className='flex w-10 h-10 rounded-full items-center justify-center bg-grey-900'>
        <span className='uppercase text-lg text-white font-medium'>
          {initialsName}
        </span>
      </button>
    </div>
  );
};

export default Header;
