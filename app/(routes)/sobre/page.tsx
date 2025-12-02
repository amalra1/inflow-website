import Footer from '@/src/components/Footer/Footer';
import styles from './page.module.css';
import Header from '@/src/components/Header/Header';
import Image from 'next/image';
import Button from '@/src/components/Button/Button';
import HistorySection from '@/src/sections/HistorySection/HistorySection';
import ValuesSection from '@/src/sections/ValuesSection/ValuesSection';

const WHATSAPP_ICON_PATH = '/social-networks-logos/whatsapp.svg';
const WHATSAPP_NUMBER = '4891186726';

export default function AboutPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;
  return (
    <main className={styles.mainContainer}>
      <Header variant="alternate" />

      <section className={styles.highlightSection}>
        <div className={styles.highlightWrapper}>
          <h2 className={styles.title}>Conheça mais a Inflow</h2>
        </div>
      </section>

      <div className={styles.ctaContainer}>
        <div className={styles.ctaGroup}>
          <Button
            href={whatsappLink}
            backgroundColor="var(--color-main)"
            textColor="white"
            borderColor="var(--color-dark)"
          >
            Contate-nos
          </Button>
          <Button
            href="/"
            backgroundColor="transparent"
            textColor="var(--color-main)"
            borderColor="#07003B17"
          >
            Conheça nossos Cases
          </Button>
        </div>
      </div>

      <HistorySection />
      <ValuesSection />

      <section className={styles.missionSection}>
        <div className={styles.missionWrapper}>
          <h2 className={styles.missionTitle}>Nossa missão</h2>
          <div className={styles.missionDescriptionWrapper}>
            <p className={styles.missionDescription}>
              Nossa expectativa é transformar a software house em uma agência
              reconhecida nacionalmente, capaz de atender clientes de todos os
              portes desde pequenos negócios até grandes multinacionais.
              Almejamos oferecer serviços contínuos por meio de contratos
              mensais, garantindo estabilidade, previsibilidade e evolução
              constante das soluções entregues.
            </p>
            <p className={styles.missionDescription}>
              Para isso, buscamos estruturar uma equipe fixa, qualificada e
              multidisciplinar, capaz de acompanhar cada projeto com excelência
              técnica e plena dedicação. O objetivo é construir uma operação
              sólida, escalável e focada na inovação, assegurando que cada
              cliente tenha sempre uma experiência excepcional. Essa expectativa
              reflete mais do que crescimento empresarial: representa a busca
              por credibilidade, consistência e alto nível de satisfação.
              Queremos ser uma referência em tecnologia, reconhecida pela
              qualidade, pelo suporte e pela capacidade de transformar ideias em
              soluções digitais que realmente fazem a diferença.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <a
        href={whatsappLink}
        className={styles.whatsappFixedButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={WHATSAPP_ICON_PATH}
          alt="WhatsApp"
          width={35}
          height={35}
          className={styles.whatsappIcon}
        />
      </a>
    </main>
  );
}
