import Footer from '@/src/components/Footer/Footer';
import styles from './page.module.css';
import Header from '@/src/components/Header/Header';
import Image from 'next/image';
import HistorySection from '@/src/sections/HistorySection/HistorySection';
import ValuesSection from '@/src/sections/ValuesSection/ValuesSection';
import TeamSection from '@/src/sections/TeamSection/TeamSection';
import ContactSection from '@/src/sections/ContactSection/ContactSection';

const WHATSAPP_ICON_PATH = '/social-networks-logos/whatsapp.svg';
const WHATSAPP_NUMBER = '4891186726';

export default function AboutPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;
  return (
    <main className={styles.mainContainer}>
      <div className={styles.gradientWrapper}>
        <Header variant="alternate" />

        <div className={styles.highlightLine}></div>

        <section className={styles.highlightSection}>
          <div className={styles.highlightWrapper}>
            <h2 className={styles.title}>Conheça mais a Inflow</h2>
          </div>
        </section>
      </div>

      <HistorySection />
      <ValuesSection />

      <section className={styles.missionSection}>
        <div className={styles.missionWrapper}>
          <h2 className={styles.missionTitle}>Nossa missão</h2>
          <div className={styles.missionDescriptionWrapper}>
            <p className={styles.missionDescription}>
              Nossa missão é desenvolver soluções digitais sob medida que
              transformem ideias em experiências funcionais, intuitivas e de
              alta performance. Buscamos garantir 100% de satisfação do cliente
              por meio de transparência, qualidade superior e obsessão pela
              usabilidade. Atuamos com inovação contínua, criando sistemas
              escaláveis e seguros que agregam valor real aos negócios, sempre
              com suporte especializado e compromisso com resultados
              consistentes.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.visionSection}>
        <div className={styles.visionWrapper}>
          <h2 className={styles.visionTitle}>Nossa Visão</h2>
          <div className={styles.visionDescriptionWrapper}></div>
          <p className={styles.visionDescription}>
            Nossa visão é ser reconhecida como referência nacional em
            desenvolvimento de software e aplicativos personalizados,
            destacando-se pela excelência técnica, simplicidade inteligente e
            foco absoluto na experiência do usuário. Queremos liderar a
            transformação digital, antecipando tendências e oferecendo soluções
            inovadoras que superem expectativas, consolidando uma cultura de
            evolução contínua e impacto positivo no mercado.
          </p>
        </div>
      </section>

      <TeamSection />
      <ContactSection title="Entre em contato e vamos tirar a sua ideia do papel!" />

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
