import Header from '@/src/components/Header/Header';
import IntroSection from '@/src/sections/IntroSection/IntroSection';
import SolutionsSection from '@/src/sections/SolutionsSection/SolutionsSection';
import PortfolioSection from '@/src/sections/PortfolioSection/PortfolioSection';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <IntroSection />
      <SolutionsSection />
      <PortfolioSection />
    </main>
  );
}
