import { Alert, AlertTitle, Box, Typography } from '@mui/material';
import type { FC } from 'react';

type AlbumsProps = {
  message: string;
  width?: number;
};

export const ErrorAlert: FC<AlbumsProps> = ({ message, width }) =>
  <Box width={width}>
    <Alert severity="error" >
      <AlertTitle>
        Something went wrong...
      </AlertTitle>
      <Typography variant="body1" >
        Message: {message}
      </Typography>
    </Alert>
  </Box>;