import styles from '@/styles/main.module.css';

import Emailspam from '@/components/email/emailspam';
import Topbar from '@/components/topbar/topbarspam';
import Sidebar from '@/components/sidebar/sidebarspam';

const Spam = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />

      <div className={styles.container}>
        <Emailspam />
        <Emailspam />
        <Emailspam />
        <Emailspam />
        <Emailspam />
        <Emailspam />
        <Emailspam />
        <Emailspam />
        <Emailspam />
        <Emailspam />
        <Emailspam />
        <Emailspam />
        <Emailspam />
      </div>
    </div>
  );
};

export default Spam;
