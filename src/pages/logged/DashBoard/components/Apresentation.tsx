import Logo from '@/assets/logo.svg';
import Image from 'next/image';
import { ButtonHTMLAttributes } from 'react';

interface IApresentationProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  subtitle: string;
  initials?: string;
  variant?: 'user' | 'doc';
}

const Apresentation: React.FC<IApresentationProps> = ({
  title,
  subtitle,
  initials,
  variant = 'user',
  ...restProps
}) => (
  <button
    className='flex bg-white flex-1 py-4 px-6 gap-4 shadow rounded-xl items-center'
    {...restProps}
  >
    {variant === 'user' && !!initials && (
      <div className='flex w-10 h-10 rounded-full items-center justify-center bg-grey-900'>
        <span className='uppercase text-lg text-white font-medium'>
          {initials}
        </span>
      </div>
    )}

    <div
      className={`flex flex-col ${
        variant === 'user' ? 'items-start' : 'items-center flex-1'
      }`}
    >
      {!!title && (
        <h6 className='font-bold text-xl text-grey-900'>
          {variant === 'user' && 'Bem vindo, '}
          {title}
        </h6>
      )}
      {variant === 'doc' && (
        <Image
          src={Logo}
          alt='logo image'
          width={95.5}
          height={19}
          className='mb-2'
        />
      )}

      <p className='text-sm text-grey-500'>{subtitle}</p>
    </div>
  </button>
);

export default Apresentation;
