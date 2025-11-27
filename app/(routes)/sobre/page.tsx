import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <Footer />
    </main>
  );
}
