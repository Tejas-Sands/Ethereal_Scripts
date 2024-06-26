import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface TransitionAlertsProps {
  message: string;
  index: number;
  severity: "error" | "warning" | "info" | "success";
}

export default function TransitionAlerts({message, index, severity}:TransitionAlertsProps) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      style={{ marginTop: index *60 }} 
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}