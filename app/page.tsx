import Header from '@/src/components/Header/Header';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.mainContainer}>
      <Header />
    </main>
  );
}
