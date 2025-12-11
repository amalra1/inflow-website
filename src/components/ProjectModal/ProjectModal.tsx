import styles from './ProjectModal.module.css';
import Image from 'next/image';
import Button from '@/src/components/Button/Button';
import { Project } from '@/src/utils/data/Projects';
import CustomModal from '@/src/components/CustomModal/CustomModal';
import { getWebsiteText } from '@/src/utils/website-text';

type ProjectModalProps = {
  project: Project | undefined;
  onClose: () => void;
  isOpen: boolean;
};

export default function ProjectModal({
  project,
  onClose,
  isOpen,
}: ProjectModalProps) {
  const websiteText = getWebsiteText();

  if (!isOpen || !project) return null;

  const MODAL_TEXT = websiteText.components.projectModal;

  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      <h2 className={styles.title}>{project.title}</h2>
      <div className={styles.columnsWrapper}>
        <div className={styles.leftColumn}>
          <div className={styles.imageContainer}>
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={300}
              height={200}
              className={styles.mainImage}
              sizes="(max-width: 600px) 90vw, 30vw"
            />
          </div>
          <h3 className={styles.listTitle}>{MODAL_TEXT.featuresTitle}</h3>
          <ul className={styles.list}>
            {project.features.map((feature, index) => (
              <li key={index} className={styles.listItem}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.rightColumn}>
          {project.descriptionList.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          <h3 className={styles.listTitle}>{MODAL_TEXT.techsTitle}</h3>
          <ul className={styles.list}>
            {project.usedTechs.map((tech, index) => (
              <li key={index} className={styles.listItem}>
                {tech}
              </li>
            ))}
          </ul>
          <div className={styles.buttonsContainer}>
            <Button
              onClick={onClose}
              backgroundColor="#000000"
              textColor="white"
              borderColor="#000000"
              className={styles.actionButton}
            >
              {MODAL_TEXT.closeButtonText}
            </Button>

            <Button
              href="/contato"
              backgroundColor="#000000"
              textColor="white"
              borderColor="#000000"
              className={styles.actionButton}
            >
              {MODAL_TEXT.budgetButtonText}
            </Button>
          </div>
        </div>
      </div>
    </CustomModal>
  );
}
