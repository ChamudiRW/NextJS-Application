import Sidebar from '../components/sidebar';

import styles from '@/styles/sidebar.module.css';

const MyPage = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>{/* Your page content goes here */}</main>
    </div>
  );
};

export default MyPage;
