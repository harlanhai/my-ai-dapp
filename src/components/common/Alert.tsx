import React from 'react';
import { Alert, AlertTitle, Snackbar } from '@mui/material';
import { CheckCircle, Error, Warning, Info } from '@mui/icons-material';

export type AlertType = 'success' | 'error' | 'warning' | 'info';

interface MyAlertProps {
  open: boolean;
  message: string;
  type: AlertType;
  title?: string;
  duration?: number;
  onClose: () => void;
}

const MyAlert: React.FC<MyAlertProps> = ({
  open,
  message,
  type,
  title,
  duration = 4000,
  onClose
}) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle />;
      case 'error':
        return <Error />;
      case 'warning':
        return <Warning />;
      case 'info':
        return <Info />;
      default:
        return <Info />;
    }
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        onClose={onClose}
        severity={type}
        icon={getIcon()}
        sx={{
          width: '100%',
          minWidth: '300px',
          maxWidth: '500px',
          boxShadow: 3,
          '& .MuiAlert-icon': {
            fontSize: '1.5rem'
          }
        }}
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MyAlert;