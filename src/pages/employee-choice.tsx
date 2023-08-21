// import { useEmployeeChoice } from "@libs";
import { EmployeeList } from "@libs";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const EmployeeChoicePage = () => {
  // const { workers, addWorker, removeWorker } = useEmployeeChoice();

  return (
    <Stack direction="column">
      <Stack direction="row">
        <Typography variant="h1" fontSize={25}>Choose collegues</Typography>
        {/* <WorkerChoiceButton choices={workers} /> */}
      </Stack>
      <Stack direction="row">
        <EmployeeList addEmployee={() => console.log('add')} removeEmployee={() => console.log('remove')} />
        {/* <SelectedWorkersList workers={workers} removeWorker={removeWorker} /> */}
      </Stack>
    </Stack>);
};
