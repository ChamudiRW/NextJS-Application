import styles from '@/styles/main.module.css';

import Email from '@/components/email/emailsent';
import Topbar from '@/components/topbar/topbarsent';
import Sidebar from '@/components/sidebar/sidebarsent';

const Spam = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
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
        <Email />
        <Email />
        <Email />
      </div>
    </div>
  );
};

export default Spam;
