import React, { ReactNode } from 'react';
import { Modal, Box } from '@mui/material';
import styles from './CustomModal.module.css';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function CustomModal({
  isOpen,
  onClose,
  children,
}: CustomModalProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className={styles.muiModalOverlay}
    >
      <Box className={styles.muiModalContent}>{children}</Box>
    </Modal>
  );
}
