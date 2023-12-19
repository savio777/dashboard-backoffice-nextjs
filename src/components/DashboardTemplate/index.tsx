import { ReactNode } from 'react';
import Sidebar from './components/Sidebar';

interface IDashboardTemplateProps {
  children: ReactNode;
}

const DashboardTemplate: React.FC<IDashboardTemplateProps> = ({ children }) => (
  <div className='flex bg-white  h-screen'>
    <Sidebar />

    <div className='flex flex-1 flex-col'>
      <div className='flex h-16 border border-grey-900'>header</div>

      {children}
    </div>
  </div>
);

export default DashboardTemplate;
