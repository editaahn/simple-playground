import { useEmployeeChoice } from "@libs";
import { EmployeeList } from "@libs";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const EmployeeChoicePage = () => {
  const { addEmployeeId, removeEmployeeId } = useEmployeeChoice();

  return (
    <Stack direction="column">
      <Stack direction="row">
        <Typography variant="h1" fontSize={25}>Choose collegues</Typography>
        {/* <WorkerChoiceButton choices={workers} /> */}
      </Stack>
      <Stack direction="row">
        <EmployeeList addEmployee={addEmployeeId} removeEmployee={removeEmployeeId} />
        {/* <SelectedWorkersList workers={workers} removeWorker={removeWorker} /> */}
      </Stack>
    </Stack>);
};
