import Badge from '@/components/atom/Badge';
import useNotifications from '@/store/Notifications';
import { HiMiniXMark } from 'react-icons/hi2';
import CardNotificationItem from './components/CardNotificationItem';

const Notifications: React.FC = () => {
  const {
    isOpenModalNotifications,
    notifications,
    closeModalNotifications,
    clearNotifications,
    setAllRead,
    setReadById,
    removeNotificationById,
  } = useNotifications();

  return (
    isOpenModalNotifications && (
      <div
        className='z-20 absolute flex flex-1 w-screen h-screen justify-end bg-black/40'
        onClick={closeModalNotifications}
      >
        <div
          className='w-96 h-full bg-white'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='flex flex-col gap-2 px-6 py-4 border-b border-b-grey-200'>
            <div className='flex gap-1'>
              <h3 className='font-bold text-xl text-grey-900'>Notificações</h3>

              <Badge margin='m-0'>
                {notifications.filter((item) => !item.opened).length}
              </Badge>

              <button
                className='ml-auto text-grey-400 text-lg -mt-2'
                onClick={closeModalNotifications}
              >
                <HiMiniXMark />
              </button>
            </div>

            <div className='flex gap-2 text-grey-800'>
              <button
                className='text-grey-600 font-medium text-sm'
                onClick={setAllRead}
              >
                Marcar todos como lido
              </button>
              •
              <button
                className='text-grey-600 font-medium text-sm'
                onClick={clearNotifications}
              >
                Limpar
              </button>
            </div>
          </div>

          {notifications.map((notification) => (
            <CardNotificationItem
              key={notification.id}
              datetime={notification.datetime}
              description={notification.description}
              id={notification.id}
              opened={notification.opened}
              title={notification.title}
              onClickRemoveNotification={removeNotificationById}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default Notifications;
