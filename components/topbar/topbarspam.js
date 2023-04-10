import styles from '@/styles/topbar.module.css';

const handleLogout = () => {
  const confirmLogout = window.confirm('Are you sure you want to log out?');
  if (confirmLogout) {
    // logout logic goes here
  }
};

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div></div>
      <h1>Spam Emails</h1>
      <div className={styles.topbar__text}>
        <a href="#" className="text-danger">
          <h3>John Doe</h3>
          <button className={styles.logout} onClick={handleLogout}>
            LogOut
          </button>
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
