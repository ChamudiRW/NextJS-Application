import Link from 'next/link';
import styles from '@/styles/sidebar.module.css';
import Image from 'next/image';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className={styles.sidebar}>
        <Image
          src="/logo.png"
          alt="Logo"
          className={styles.sidebar__logo}
          width={200}
          height={130}
        />

        <nav className={styles.sidebar__nav}>
          <ul>
            <li>
              <Link href="/">
                Dashboard<button className={styles.num}>45</button>
              </Link>
            </li>
            <li>
              <Link href="/sent">Sent</Link>
            </li>
            <li>
              <Link href="/spam" className={styles.active}>
                Spam
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
