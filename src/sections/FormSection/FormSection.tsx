'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './FormSection.module.css';
import Image from 'next/image';

import { detailedSolutions } from '@/src/utils/data/SolutionsData';

const SERVICE_OPTIONS = detailedSolutions.map((solution) => solution.title);

export default function FormSection() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    celular: '',
    projeto: '',
    servicos: [] as string[],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const { servicos } = prev;
      if (servicos.includes(service)) {
        return { ...prev, servicos: servicos.filter((s) => s !== service) };
      } else {
        return { ...prev, servicos: [...servicos, service] };
      }
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log('--- Dados do Orçamento Enviados ---');
    console.log(formData);
    console.log('---------------------------------');
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.innerWrapper}>
        <h2 className={styles.title}>
          Tem uma ideia em mente? Vamos trabalhar juntos!
        </h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="nome" className={styles.label}>
              Nome
            </label>

            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              className={`${styles.input} ${styles.inputFull}`}
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                E-mail
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu melhor email"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="celular" className={styles.label}>
                Celular
              </label>

              <input
                type="tel"
                id="celular"
                name="celular"
                placeholder="(00) 00000-0000"
                className={styles.input}
                value={formData.celular}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="projeto" className={styles.label}>
              Conte-nos sobre seu projeto
            </label>
            <textarea
              id="projeto"
              name="projeto"
              placeholder="Conte-nos sobre seu projeto"
              className={`${styles.textarea} ${styles.inputFull}`}
              rows={5}
              value={formData.projeto}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.servicesGroup}>
            <p className={styles.servicesTitle}>Serviços de seu interesse</p>

            <div className={styles.servicesGrid}>
              {SERVICE_OPTIONS.map((service) => (
                <div
                  key={service}
                  className={`${styles.serviceCard} ${
                    formData.servicos.includes(service)
                      ? styles.serviceCardActive
                      : ''
                  }`}
                  onClick={() => handleServiceToggle(service)}
                >
                  <span className={styles.serviceName}>{service}</span>

                  <div className={styles.checkbox}>
                    {formData.servicos.includes(service) && (
                      <span className={styles.checkMark}>&#10003;</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.submitWrapper}>
            <button type="submit" className={styles.submitButtonOverride}>
              Solicitar orçamento
            </button>
          </div>
        </form>
      </div>

      <Image
        src="/circles/intro-large-blue-circle.svg"
        alt="Círculos de design de fundo"
        width={350}
        height={350}
        className={styles.circlesDesignImageRight}
        unoptimized
      />
    </section>
  );
}
