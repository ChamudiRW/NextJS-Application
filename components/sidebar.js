import Link from 'next/link';
import styles from '../styles/sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <img src="/logo.png" alt="Logo" className="sidebar__logo" />
      <nav className="sidebar__nav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
