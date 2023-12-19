import { ButtonHTMLAttributes, ReactNode, useMemo } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary-600';
  children: ReactNode;
}

const Button: React.FC<IButtonProps> = ({
  children,
  variant = 'primary-600',
  ...props
}) => {
  const { bgColor, color } = useMemo(() => {
    switch (variant) {
      case 'primary-600':
        return {
          bgColor: variant,

          color: 'white',
        };

      default:
        return {
          bgColor: variant,
          color: 'white',
        };
    }
  }, [variant]);

  return (
    <button
      className={`bg-${bgColor} flex justify-center px-4 py-2 rounded-lg shadow`}
      {...props}
    >
      <span className={`text-${color} font-medium text-sm`}>{children}</span>
    </button>
  );
};

export default Button;
