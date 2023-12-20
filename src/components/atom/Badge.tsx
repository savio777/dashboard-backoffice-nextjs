import { ReactNode } from 'react';

interface IBadgeProps {
  children: ReactNode;
  variant?: 'primary-700' | 'primary-500';
  padding?: string;
}

const Badge: React.FC<IBadgeProps> = ({
  children,
  padding,
  variant = 'primary-700',
}) => (
  <span
    className={`text-${variant} bg-primary-100 rounded-3xl ml-auto ${
      padding || 'px-2 py-0.5'
    } text-xs font-medium`}
  >
    {children}
  </span>
);

export default Badge;
