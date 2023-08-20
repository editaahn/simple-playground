import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const WorkerChoicePage = () => {
  const { workers, addWorker, removeWorker } = useWorkerChoice();

  return (
    <Stack direction="column">
      <Stack direction="row">
        <Typography variant="h1" fontSize={25}>Choose collegues</Typography>
        <WorkerChoiceButton choices={workers} />
      </Stack>
      <Stack direction="row">
        <WorkersList addWorker={addWorker} />
        <SelectedWorkersList workers={workers} removeWorker={removeWorker} />
      </Stack>
    </Stack>);
};
