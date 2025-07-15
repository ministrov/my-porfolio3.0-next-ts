import { Promo } from './sections/Promo/Promo';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Promo />
    </div>
  );
}
