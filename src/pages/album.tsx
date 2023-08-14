import { Albums } from "@libs";
import { Box, Typography } from "@mui/material";
import { ApiErrorBoundary, ErrorAlert } from "@utils";
import { Suspense } from "react";

export const AlbumPage = () => {
  return (
    <>
      <Typography variant="h1">Albums!</Typography>
      
      <ApiErrorBoundary
        renderFallback={error =>
          <ErrorAlert message={error.message} />
        }>
        <Suspense fallback={<Box>Loading...</Box>}>
          <Albums />
        </Suspense>
      </ApiErrorBoundary>
    </>
  );
};
