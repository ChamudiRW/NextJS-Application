import styles from '@/styles/topbar.module.css';

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div></div>
      <div className={styles.topbar__text}>
        <img
          src="/profile_icon.png"
          alt="Logo"
          className={styles.profile__image}
        />
        &emsp;
        <a href="#" className="text-danger">
          <h3>John Doe</h3>
          <button className={styles.logout}>LogOut</button>
        </a>
        &emsp;
      </div>
    </div>
  );
};

export default Topbar;
