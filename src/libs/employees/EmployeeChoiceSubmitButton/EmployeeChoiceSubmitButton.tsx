import { Button } from '@mui/material';
import { binder } from '@utils';
import { useEmployeeChoiceSubmitButton } from './useEmployeeChoiceSubmitButton';

export const EmployeeChoiceSubmitButton = binder(useEmployeeChoiceSubmitButton,
  ({ submit }) =>
    <Button variant="contained" onClick={submit}>
      Submit
    </Button>
);
