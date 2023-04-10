import styles from '@/styles/topbar.module.css';

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div></div>
      <h1>View Emails</h1>
      <div className={styles.topbar__text}>
        <a href="#" className="text-danger">
          <h3>John Doe</h3>
          <button className={styles.logout}>LogOut</button>
        </a>
        &emsp;
        <img
          src="/profile_icon.png"
          alt="Logo"
          className={styles.profile__image}
        />
        &emsp;
      </div>
    </div>
  );
};

export default Topbar;
