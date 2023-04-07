import Topbar from '@/components/topbar';
import Sidebar from '../components/sidebar';
import Containers from '@/components/containers';
import styles from '@/styles/main.module.css';
import Email from '@/components/email';

const Dashboard = () => {
  console.log('Dashboard component rendered!');
  return (
    <div>
      <Topbar />
      <Sidebar />
      <Containers />
      <div className={styles.container}>
        <Email />
        <Email />
        <Email />
        <Email />
        <Email />
        <Email />
      </div>
    </div>
  );
};

export default Dashboard;
