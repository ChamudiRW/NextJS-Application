import Topbar from '@/components/topbar';
import Sidebar from '../components/sidebar';
import styles from '@/styles/main.module.css';

const Spam = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />

      <main className={styles.content}>
        {/* Your page content goes here */}
      </main>
    </div>
  );
};

export default Spam;
