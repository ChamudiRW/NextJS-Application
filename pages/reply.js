import Sidebar from '@/components/sidebar/sidebar';
import Topbar from '@/components/topbar/topbarreply';
import styles from '@/styles/reply.module.css';
import Link from 'next/link';

const Spam = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className={styles.container}>
        <div className={styles.box}>
          <form>
            <label htmlFor="to">To:     </label>
            <input
              type="text"
              id="to"
              name="to"
              placeholder="exampleemail@email.com"
              className={styles['input-field']}
            />
            <br />
            <br />
            <label htmlFor="subject">Subject:  </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Heading of the Email"
              className={styles['input-field']}
            />
            <br />
            <br />
            <textarea
              id="message"
              name="message"
              rows="7"
              style={{ width: '900px', height: '200px' }}
              placeholder={`Dear [Applicant’s Name],

I am delighted to inform you that you have been selected from our application process. We are confident that you will be an asset to Australia's workforce and contribute to its growth and development. We understand that moving to a new country can be daunting, but we assure you that we are here to support you every step of the way. Our team is available to answer any questions you may have and provide you with the necessary guidance and support to ensure a smooth transition to your new life in Australia. We wish you all the best as you embark on this exciting new chapter in your life.

Best regards,
[Your Name]
Australian Migration Consultant`}
              className={styles['input-field']}
            ></textarea>
            <br />
            <br />
            <div className={styles.grid}>
              <Link href="/reply">
                <button className={styles.button}>Reply</button>
              </Link>
              <button className={styles.button}>Forward</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Spam;
