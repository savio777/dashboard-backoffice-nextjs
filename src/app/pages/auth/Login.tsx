import Input from '@/app/components/Input';
import Logo from '@/assets/logo.svg';
import Image from 'next/image';

export default function Login() {
  return (
    <div className='flex flex-1 flex-col h-screen items-center justify-center bg-white'>
      <div className='flex flex-col gap-6 p-8 rounded-2xl bg-white/30 shadow w-96 border border-grey-200'>
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
      </div>
    </div>
  );
}
