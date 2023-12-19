import { ReactNode } from 'react';

interface IDashboardTemplateProps {
  children: ReactNode;
}

const DashboardTemplate: React.FC<IDashboardTemplateProps> = ({ children }) => (
  <div className='flex bg-white flex-col h-screen'>
    <div className='flex h-16 border border-grey-900'>header</div>

    <div className='flex flex-1'>
      <div className='flex h-full w-80 border border-grey-900'>sidebar</div>

      {children}
    </div>
  </div>
);

export default DashboardTemplate;
