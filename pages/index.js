import Topbar from '@/components/topbar';
import Sidebar from '../components/sidebar';
import Containers from '@/components/containers';

const Dashboard = () => {
  console.log('Dashboard component rendered!');
  return (
    <div>
      <Topbar />
      <Sidebar />
      <Containers />
    </div>
  );
};

export default Dashboard;
