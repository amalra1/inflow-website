'use client';

import { useCallback, useState } from 'react';
import styles from './FormSection.module.css';
import Image from 'next/image';

import { useForm, Controller, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { detailedSolutions } from '@/src/utils/data/SolutionsData';

const SERVICE_OPTIONS = detailedSolutions.map((solution) => solution.title);
const CARACTERES_CELULAR_PERMITIDOS = /^[0-9\(\)\-\+]{10,15}$/;
const REGEX_FILTRO_INPUT = /[0-9\(\)\-\+]/g;
const GOOGLE_SHEET_ENDPOINT = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ENDPOINT;

const schema = z.object({
  nome: z
    .string()
    .min(3, 'O nome deve ter pelo menos 3 caracteres.')
    .max(50, 'O nome pode ter no máximo 50 caracteres.'),
  email: z.string().email('Formato de e-mail inválido.'),
  celular: z
    .string()
    .regex(
      CARACTERES_CELULAR_PERMITIDOS,
      'O formato de celular é inválido. Permite apenas números, -, ( ), e +.',
    ),
  projeto: z
    .string()
    .min(10, 'A descrição do projeto é muito curta.')
    .max(1000, 'A descrição do projeto pode ter no máximo 1000 caracteres.'),
  servicos: z
    .array(z.string())
    .min(1, 'Selecione pelo menos um serviço de interesse.'),
});

type FormData = z.infer<typeof schema>;

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ErrorMessage = ({ message }: { message: string | undefined }) => {
  if (!message) return null;
  return <p className={styles.errorMessage}>{message}</p>;
};

export default function FormSection() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>(
    'success',
  );

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      nome: '',
      email: '',
      celular: '',
      projeto: '',
      servicos: [],
    },
  });

  const watchedServices = useWatch({ control, name: 'servicos' });

  const handleServiceToggle = useCallback(
    (service: string) => {
      const currentServices = watchedServices || [];

      const newServices = currentServices.includes(service)
        ? currentServices.filter((s) => s !== service)
        : [...currentServices, service];

      setValue('servicos', newServices, {
        shouldValidate: true,
        shouldDirty: true,
      });
    },
    [watchedServices, setValue],
  );

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const onSubmit = async (data: FormData) => {
    if (!GOOGLE_SHEET_ENDPOINT) {
      setSnackbarMessage('Erro: Endpoint do formulário não configurado.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    console.log('Enviando dados:', data);

    try {
      await fetch(GOOGLE_SHEET_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      setSnackbarMessage(
        'Orçamento enviado com sucesso! Entraremos em contato.',
      );
      setSnackbarSeverity('success');

      reset();
    } catch (error) {
      console.error('Erro ao enviar dados para o Google Sheets:', error);
      setSnackbarMessage('Erro ao enviar. Tente novamente mais tarde.');
      setSnackbarSeverity('error');
    } finally {
      setSnackbarOpen(true);
    }
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.innerWrapper}>
        <h2 className={styles.title}>
          Tem uma ideia em mente? Vamos trabalhar juntos!
        </h2>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="nome"
            control={control}
            render={({ field }) => (
              <div className={styles.inputGroup}>
                <label htmlFor="nome" className={styles.label}>
                  Nome
                </label>
                <input
                  {...field}
                  type="text"
                  id="nome"
                  placeholder="Digite seu nome"
                  className={`${styles.input} ${styles.inputFull}`}
                  maxLength={50}
                  required
                />
                <ErrorMessage message={errors.nome?.message} />
              </div>
            )}
          />

          <div className={styles.inputRow}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>
                    E-mail
                  </label>
                  <input
                    {...field}
                    type="email"
                    id="email"
                    placeholder="Digite seu melhor email"
                    className={styles.input}
                    maxLength={100}
                    required
                  />
                  <ErrorMessage message={errors.email?.message} />
                </div>
              )}
            />

            <Controller
              name="celular"
              control={control}
              render={({ field }) => (
                <div className={styles.inputGroup}>
                  <label htmlFor="celular" className={styles.label}>
                    Celular
                  </label>
                  <input
                    {...field}
                    onChange={(e) => {
                      const filteredValue =
                        e.target.value.match(REGEX_FILTRO_INPUT)?.join('') ||
                        '';
                      field.onChange(filteredValue);
                    }}
                    type="tel"
                    id="celular"
                    placeholder="Seu número de telefone"
                    className={styles.input}
                    maxLength={15}
                    required
                  />
                  <ErrorMessage message={errors.celular?.message} />
                </div>
              )}
            />
          </div>

          <Controller
            name="projeto"
            control={control}
            render={({ field }) => (
              <div className={styles.inputGroup}>
                <label htmlFor="projeto" className={styles.label}>
                  Conte-nos sobre seu projeto
                </label>
                <textarea
                  {...field}
                  id="projeto"
                  placeholder="Conte-nos sobre seu projeto"
                  className={`${styles.textarea} ${styles.inputFull}`}
                  rows={5}
                  maxLength={1000}
                  required
                />
                <ErrorMessage message={errors.projeto?.message} />
              </div>
            )}
          />

          <div className={styles.servicesGroup}>
            <p className={styles.servicesTitle}>Serviços de seu interesse</p>

            <div className={styles.servicesGrid}>
              {SERVICE_OPTIONS.map((service) => (
                <div
                  key={service}
                  className={`${styles.serviceCard} ${
                    (watchedServices || []).includes(service)
                      ? styles.serviceCardActive
                      : ''
                  }`}
                  onClick={() => handleServiceToggle(service)}
                >
                  <span className={styles.serviceName}>{service}</span>

                  <div className={styles.checkbox}>
                    {(watchedServices || []).includes(service) && (
                      <span className={styles.checkMark}>&#10003;</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <ErrorMessage message={errors.servicos?.message} />
          </div>

          <div className={styles.submitWrapper}>
            <button
              type="submit"
              className={styles.submitButtonOverride}
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Solicitar orçamento'}
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

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </section>
  );
}
