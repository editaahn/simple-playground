import { Alert, Button, Snackbar } from '@mui/material';
import { binder } from '@utils';
import { useEmployeeChoiceSubmitButton } from './useEmployeeChoiceSubmitButton';

export const EmployeeChoiceSubmitButton = binder(useEmployeeChoiceSubmitButton,
  ({ toastOpen, closeToast, submit, error }) =>
    <>
      <Button variant="contained" onClick={submit}>
        Submit
      </Button>

      {/* TO-DO: ErrorBoundary */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={2000}
        onClose={closeToast}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {error ?
          <Alert severity="error" sx={{ width: '100%' }}>
            Error!
          </Alert> :
          <Alert severity="success" sx={{ width: '100%' }}>
            Success!
          </Alert>}
      </Snackbar>
    </>
);
