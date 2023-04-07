import Topbar from '@/components/topbar';
import Sidebar from '../components/sidebar';
import styles from '@/styles/main.module.css';
import Email from '@/components/email';

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
      </div>
    </div>
  );
};

export default Spam;
