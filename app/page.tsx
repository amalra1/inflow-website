import Header from '@/src/components/Header/Header';
import IntroSection from '@/src/sections/IntroSection/IntroSection';
import SolutionsSection from '@/src/sections/SolutionsSection/SolutionsSection';
import PortfolioSection from '@/src/sections/PortfolioSection/PortfolioSection';
import StepsSection from '@/src/sections/StepsSection/StepsSection';
import ContactSection from '@/src/sections/ContactSection/ContactSection';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <IntroSection />
      <SolutionsSection />
      <PortfolioSection />
      <StepsSection />
      <ContactSection title="Tem interesse em trabalhar conosco?" />
    </main>
  );
}
