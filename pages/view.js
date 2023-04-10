import Sidebar from '@/components/sidebar/sidebar';
import Topbar from '@/components/topbar/topbarview';
import styles from '@/styles/view.module.css';
import Link from 'next/link';

const View = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className={styles.container}>
        <div className={`${styles.box} `}>
          <h2>Heading of the Email</h2>
          <br />
          <h6>Sent by: examplemail@email.com</h6>
          <p>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
            venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum
            eget. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
            vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar
            vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel
            leo. Intege r feugiatfaucibus libero, at maximus nisl suscipit
            posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum
            egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique
            sapien vestibulum lobortis. Nam eget bibendum metus, non dictum
            mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
          </p>
          <br />
          <div className={styles.grid}>
            <button className={styles.attachment}>
              <i class="bi bi-paperclip"></i> pdf
            </button>
            <button className={styles.attachment}>
              <i class="bi bi-paperclip"></i> pdf
            </button>
          </div>{' '}
          <br />
          <div className={styles.grid}>
            <Link href="/reply">
              <button className={styles.button}>Reply</button>
            </Link>
            <button className={styles.button}>Forward</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
