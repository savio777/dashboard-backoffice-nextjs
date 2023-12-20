import { HiMiniXMark, HiOutlineShoppingBag } from 'react-icons/hi2';

interface ICardNotificationItemProps extends INotification {
  onClickRemoveNotification: (id: string) => void;
}

const CardNotificationItem: React.FC<ICardNotificationItemProps> = ({
  datetime,
  description,
  opened,
  title,
  id,
  onClickRemoveNotification,
}) => (
  <div
    className={`flex gap-4 px-4 py-3 text-grey-500 text-sm border-b border-b-grey-200 ${
      opened ? 'bg-white' : 'bg-primary-50'
    }`}
  >
    <div className='text-lg text-grey-400 pt-1'>
      <HiOutlineShoppingBag />
    </div>

    <div className='flex flex-1 flex-col'>
      <h6 className=' text-grey-900 font-medium'>{title}</h6>
      <p className='text-xs'>{datetime}</p>
      <p className='font-medium'>{description}</p>

      <a className='text-primary-600 font-medium mt-1.5' href=''>
        Ver
      </a>
    </div>

    <button
      className='text-lg text-grey-400 flex'
      onClick={() => onClickRemoveNotification(id)}
    >
      <HiMiniXMark />
    </button>
  </div>
);

export default CardNotificationItem;
