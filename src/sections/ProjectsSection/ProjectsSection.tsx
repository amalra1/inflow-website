'use client';

import styles from './ProjectsSection.module.css';
import { useState } from 'react';
import Button from '@/src/components/Button/Button';
import ProjectCard from '@/src/components/ProjectCard/ProjectCard';
import {
  projectsData,
  ProjectFilter,
  Project,
  projectFilterTexts,
} from '@/src/utils/data/Projects';
import ProjectModal from '@/src/components/ProjectModal/ProjectModal';

const FILTERS_BUTTONS = [
  { id: 'all', label: projectFilterTexts.ALL }, // Usamos ALL do JSON
  { id: ProjectFilter.ECOMMERCE, label: projectFilterTexts.ECOMMERCE },
  { id: ProjectFilter.SITES, label: projectFilterTexts.SITES },
  { id: ProjectFilter.OTHER, label: projectFilterTexts.OTHER },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  const filteredProjects = projectsData.filter(
    (project) => activeFilter === 'all' || project.filter === activeFilter,
  );

  const selectedProject: Project | undefined = projectsData.find(
    (p) => p.id === selectedProjectId,
  );

  const handleDetailsClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProjectId(null);
  };

  return (
    <section className={styles.projectsSection}>
      <div className={styles.innerWrapper}>
        <div className={styles.filterBar}>
          {FILTERS_BUTTONS.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              backgroundColor={
                activeFilter === filter.id
                  ? 'var(--color-main)'
                  : 'var(--color-secondary)'
              }
              textColor="white"
              borderColor={
                activeFilter === filter.id
                  ? 'var(--color-main)'
                  : 'var(--color-secondary)'
              }
              className={styles.filterButtonOverride}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className={styles.cardGrid}>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              projectId={project.id}
              title={project.title}
              imageUrl={project.imageUrl}
              projectLink={project.projectLink}
              onDetailsClick={handleDetailsClick}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </section>
  );
}
