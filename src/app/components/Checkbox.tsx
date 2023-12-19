import { FaCheck } from 'react-icons/fa6';

interface ICheckboxProps {
  isActivated?: boolean;
  title: string;
  onClick?: () => void;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  isActivated,
  onClick,
  title,
}) => (
  <button
    className='flex gap-3 items-center hover:cursor-pointer'
    onClick={onClick}
  >
    <div
      className={`w-4 h-4 flex items-center justify-center rounded border border-grey-300 text-white text-xs ${
        isActivated && 'bg-primary-600'
      }`}
    >
      {isActivated && <FaCheck />}
    </div>

    <label className='font-medium text-grey-700 text-sm hover:cursor-pointer'>
      {title}
    </label>
  </button>
);

export default Checkbox;
