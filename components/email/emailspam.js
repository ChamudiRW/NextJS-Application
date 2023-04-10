import styles from '@/styles/email.module.css';
import Link from 'next/link';

const Email = () => {
  return (
    <div className={styles.box}>
      <div className={styles.grid}>
        <div>#</div>
        <div>Subject of the email</div>
        <div></div>
        <div>
          <button className={styles.attachment}>
            <i class="bi bi-paperclip"></i> pdf
          </button>
          <button className={styles.attachment}>
            <i class="bi bi-paperclip"></i> pdf
          </button>
        </div>
        <div>
          <Link href="/view">
            <button className={styles.button}>View</button>
          </Link>
          <button className={styles.button}>Restore</button>
        </div>
      </div>
    </div>
  );
};

export default Email;
