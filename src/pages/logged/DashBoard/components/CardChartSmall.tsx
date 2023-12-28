import TrendingDownImg from '@/assets/trending-down.svg';
import TrendingUpImg from '@/assets/trending-up.svg';
import Image from 'next/image';
import { ButtonHTMLAttributes } from 'react';

interface ICardChartSmallProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  value: string | number;
  descriptionValue: string | number;
  variant?: 'increase' | 'decrease';
}

const CardChartSmall: React.FC<ICardChartSmallProps> = ({
  title,
  descriptionValue,
  value,
  variant = 'increase',
  ...restProps
}) => (
  <button
    className='flex flex-col flex-1 bg-white rounded-xl shadow px-6 pt-6 gap-2.5'
    {...restProps}
  >
    <p className='text-grey-500 text-sm font-medium'>{title}</p>

    <h5 className='text-3xl text-grey-900'>{value}</h5>

    <div className='flex flex-col items-start w-full'>
      <p
        className={`text-sm font-medium ${
          variant === 'increase' ? 'text-success-600' : 'text-danger-600'
        }`}
      >
        {descriptionValue} {variant === 'increase' ? 'aumentou' : 'diminuiu'}{' '}
        <Image
          source={variant === 'increase' ? TrendingUpImg : TrendingDownImg}
          width={16}
          height={16}
          alt=''
        />
      </p>
    </div>
  </button>
);

export default CardChartSmall;
