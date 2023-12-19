import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isRequired?: boolean;
}

const Input: React.FC<InputProps> = ({ label, isRequired, ...props }) => {
  return (
    <div className='flex flex-col gap-1.5'>
      {!!label && (
        <label className='font-medium text-grey-700 text-sm'>
          {label} {isRequired && <span className='text-danger-700'>*</span>}
        </label>
      )}
      <input
        className='bg-white rounded-lg px-3.5 py-2.5 border border-grey-300 shadow'
        {...props}
      />
    </div>
  );
};

export default Input;
