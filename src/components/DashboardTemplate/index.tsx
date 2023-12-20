import { ReactNode } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

interface IDashboardTemplateProps {
  children: ReactNode;
}

const DashboardTemplate: React.FC<IDashboardTemplateProps> = ({ children }) => (
  <div className='flex bg-white  h-screen'>
    <Sidebar />

    <div className='flex flex-1 flex-col'>
      <Header />

      {children}
    </div>
  </div>
);

export default DashboardTemplate;
