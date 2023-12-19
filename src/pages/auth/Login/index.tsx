import Image from 'next/image';
import { useState } from 'react';

import Logo from '@/assets/logo.svg';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';
import useSession from '@/store/Session';
import Ellipse from './components/Ellipse';

export default function Login() {
  const { signin } = useSession();

  const [isRememberMe, setIsRememberMe] = useState(false);

  return (
    <div className='relative flex flex-1 flex-col h-screen items-center justify-center bg-white'>
      <Ellipse />

      <form className='absolute m-auto left-0 right-0 h-fit flex flex-col gap-6 p-8 rounded-2xl bg-white/30 shadow w-96 border border-grey-200'>
        <Image
          className='self-center'
          src={Logo}
          alt='logo image'
          width={95.5}
          height={19}
        />

        <h2 className='text-2xl font-bold self-center text-center text-grey-900'>
          Login
        </h2>

        <Input label='E-mail' isRequired type='email' />

        <Input label='Senha' isRequired type='password' />

        <Checkbox
          title='Lembre de mim'
          onClick={() => setIsRememberMe((oldValue) => !oldValue)}
          isActivated={isRememberMe}
        />

        <Button
          onClick={(e) => {
            e.preventDefault();
            signin({ name: 'Sávio test', isAuthenticated: true });
          }}
        >
          Entrar
        </Button>
      </form>
    </div>
  );
}
