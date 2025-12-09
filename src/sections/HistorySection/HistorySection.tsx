import styles from './HistorySection.module.css';

export default function HistorySection() {
  return (
    <section className={styles.historySection}>
      <div className={styles.innerWrapper}>
        <div className={styles.contentBlock}>
          <h2 className={styles.title}>Sobre nós</h2>
          <p className={styles.paragraph}>
            A Inflow é uma software house especializada em criar soluções
            digitais sob medida do zero e do jeito que o seu projeto exige.
          </p>
          <p className={styles.paragraph}>
            Desenvolvemos sistemas e aplicativos personalizados, com uma equipe
            técnica experiente e preparada para transformar sua ideia em
            tecnologia funcional.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <div className={styles.highlightTitleContainer}>
            <div className={styles.blueLine}></div>
            <h2 className={styles.title}>Nossa História</h2>
          </div>
          <p className={styles.paragraph}>
            Começamos através de um grupo de amigos apaixonados por desenvolver
            ideias.
          </p>
          <p className={styles.paragraph}>
            Queremos que você tenha total clareza antes de iniciar qualquer
            projeto. Por isso, disponibilizamos um orçamento gratuito e sem
            compromisso, para que você saiba exatamente o investimento
            necessário.
          </p>
          <p className={styles.paragraph}>
            Com a Inflow, seu software ou aplicativo é desenvolvido do zero,
            totalmente personalizado e alinhado às suas necessidades, sempre com
            alta qualidade e dentro do seu orçamento.
          </p>
        </div>
      </div>
    </section>
  );
}
