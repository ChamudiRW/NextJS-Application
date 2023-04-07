import styles from '@/styles/containers.module.css';

const Containers = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={`${styles.box} `}>
          <span>
            New&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div style={{ color: '#df4759', display: 'inline-block' }}>46</div>
          </span>
        </div>
        <div className={`${styles.box} `}>
          <span>Inbox&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;116</span>
        </div>
        <div className={`${styles.box} `}>
          <span>Sent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;41</span>
        </div>
        <div className={`${styles.box} `}>
          <span>Spam&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37</span>
        </div>
      </div>
    </div>
  );
};

export default Containers;
