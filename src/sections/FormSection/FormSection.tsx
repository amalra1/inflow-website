'use client';

import { useCallback, useState } from 'react';
import styles from './FormSection.module.css';
import Image from 'next/image';

import { useForm, Controller, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { getDetailedSolutions } from '@/src/utils/data/SolutionsData';
import { useI18n } from '@/src/context/i18n.context';

const CARACTERES_CELULAR_PERMITIDOS = /^[0-9\(\)\-\+]{10,15}$/;
const REGEX_FILTRO_INPUT = /[0-9\(\)\-\+]/g;
const GOOGLE_SHEET_ENDPOINT = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ENDPOINT;

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ErrorMessage = ({ message }: { message: string | undefined }) => {
  if (!message) return null;
  return <p className={styles.errorMessage}>{message}</p>;
};

export default function FormSection() {
  const { text: websiteText } = useI18n();

  const detailedSolutions = getDetailedSolutions(websiteText);

  const FORM_TEXT = websiteText.contactPage.formSection;
  const FORM_VALIDATION = FORM_TEXT.fields;
  const WHATSAPP_ALT_TEXT =
    websiteText.sections.introSection.altTexts.designCircles;
  const SERVICE_OPTIONS = detailedSolutions.map((solution) => solution.title);

  const schema = z.object({
    nome: z
      .string()
      .min(3, FORM_VALIDATION.nome.validation.min)
      .max(50, FORM_VALIDATION.nome.validation.max),
    email: z.string().email(FORM_VALIDATION.email.validation.invalid),
    celular: z
      .string()
      .regex(
        CARACTERES_CELULAR_PERMITIDOS,
        FORM_VALIDATION.celular.validation.invalid,
      ),
    projeto: z
      .string()
      .min(10, FORM_VALIDATION.projeto.validation.min)
      .max(1000, FORM_VALIDATION.projeto.validation.max),
    servicos: z
      .array(z.string())
      .min(1, FORM_VALIDATION.servicos.validation.min),
  });

  type FormData = z.infer<typeof schema>;

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
      setSnackbarMessage(FORM_TEXT.feedback.errorEndpoint);
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

      setSnackbarMessage(FORM_TEXT.feedback.success);
      setSnackbarSeverity('success');

      reset();
    } catch (error) {
      console.error('Erro ao enviar dados para o Google Sheets:', error);
      setSnackbarMessage(FORM_TEXT.feedback.errorFetch);
      setSnackbarSeverity('error');
    } finally {
      setSnackbarOpen(true);
    }
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.innerWrapper}>
        <h2 className={styles.title}>{FORM_TEXT.sectionTitle}</h2>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="nome"
            control={control}
            render={({ field }) => (
              <div className={styles.inputGroup}>
                <label htmlFor="nome" className={styles.label}>
                  {FORM_VALIDATION.nome.label}
                </label>
                <input
                  {...field}
                  type="text"
                  id="nome"
                  placeholder={FORM_VALIDATION.nome.placeholder}
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
                    {FORM_VALIDATION.email.label}
                  </label>
                  <input
                    {...field}
                    type="email"
                    id="email"
                    placeholder={FORM_VALIDATION.email.placeholder}
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
                    {FORM_VALIDATION.celular.label}
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
                    placeholder={FORM_VALIDATION.celular.placeholder}
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
                  {FORM_VALIDATION.projeto.label}
                </label>
                <textarea
                  {...field}
                  id="projeto"
                  placeholder={FORM_VALIDATION.projeto.placeholder}
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
            <p className={styles.servicesTitle}>
              {FORM_VALIDATION.servicos.title}
            </p>

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
              {isSubmitting
                ? FORM_TEXT.submitButton.submitting
                : FORM_TEXT.submitButton.default}
            </button>
          </div>
        </form>
      </div>

      <Image
        src="/circles/intro-large-blue-circle.svg"
        alt={WHATSAPP_ALT_TEXT}
        width={350}
        height={350}
        className={styles.circlesDesignImageRight}
        unoptimized
      />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
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
