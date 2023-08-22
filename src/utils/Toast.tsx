import { Alert, Snackbar } from '@mui/material';
import type { FC } from 'react';

type ToastProps = {
  open: boolean;
  onClose: () => void;
  message: string;
  severity: "success" | "error"
};

export const Toast: FC<ToastProps> = ({ open, onClose, message, severity }) =>
  <Snackbar
    open={open}
    autoHideDuration={2000}
    onClose={onClose}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  >
    <Alert severity={severity} sx={{ width: '100%' }}>
      {message}
    </Alert>
  </Snackbar>;