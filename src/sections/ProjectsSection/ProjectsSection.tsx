'use client';

import styles from './ProjectsSection.module.css';
import { useState } from 'react';
import Button from '@/src/components/Button/Button';
import ProjectCard from '@/src/components/ProjectCard/ProjectCard';
import { projectsData, ProjectFilter } from '@/src/utils/data/Projects';

const FILTERS_BUTTONS = [
  { id: 'all', label: 'Todos' },
  { id: ProjectFilter.ECOMMERCE, label: 'E-commerce' },
  { id: ProjectFilter.APP, label: 'Apps' },
  { id: ProjectFilter.SITES, label: 'Sites' },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projectsData.filter(
    (project) => activeFilter === 'all' || project.filter === activeFilter,
  );

  const handleDetailsClick = (projectId: string) => {};

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
    </section>
  );
}
