import DashBoard from '@/pages/logged/DashBoard';
import VerifyIfAuthenticated from '../utils/VerifyIfAuthenticated';

export default function Home() {
  return (
    <VerifyIfAuthenticated>
      <DashBoard />
    </VerifyIfAuthenticated>
  );
}
