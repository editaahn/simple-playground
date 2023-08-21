import { EmployeeList, SelectedEmployeeList, useEmployeeChoice } from "@libs";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const EmployeeChoicePage = () => {
  const { selectedEmployee, addEmployee, removeEmployee, checkSelected } = useEmployeeChoice();

  return (
    <Stack direction="column">
      <Stack direction="row">
        <Typography variant="h1" fontSize={25}>Choose collegues</Typography>
        {/* <WorkerChoiceButton choices={workers} /> */}
      </Stack>
      <Stack direction="row" spacing="30px">
        <EmployeeList
          addEmployee={addEmployee}
          removeEmployee={removeEmployee}
          checkSelected={checkSelected} />
        <SelectedEmployeeList
          employees={selectedEmployee}
          removeEmployee={removeEmployee} />
      </Stack>
    </Stack>);
};
