import Link from 'next/link';
import styles from '@/styles/sidebar.module.css';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className={styles.sidebar}>
        <img src="/logo.png" alt="Logo" className={styles.sidebar__logo} />
        <nav className={styles.sidebar__nav}>
          <ul>
            <li>
              <Link href="/">Dashboard</Link>
            </li>
            <li>
              <Link href="/sent">Sent</Link>
            </li>
            <li>
              <Link href="/spam">Spam</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
