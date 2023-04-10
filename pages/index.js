import Topbar from '@/components/topbar/topbar';

import Containers from '@/components/containers';
import styles from '@/styles/main.module.css';
import Email from '@/components/email/email';
import Sidebar from '@/components/sidebar/sidebardash';

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
        <Email />
        <Email />
        <Email />
        <Email />
      </div>
    </div>
  );
};

export default Dashboard;
