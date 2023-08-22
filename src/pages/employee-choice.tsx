import { EmployeeList, SelectedEmployeeList, useEmployeeChoice } from "@libs";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const EmployeeChoicePage = () => {
  const { selectedEmployees, addEmployee, removeEmployee, checkSelected } = useEmployeeChoice();

  return (
    <Stack direction="column">
      <Stack direction="row">
        <Typography variant="h1" fontSize={25}>Choose collegues</Typography>
        {/* <EmployeeChoiceSubmitButton choices={selectedEmployee} /> */}
      </Stack>
      <Stack direction="row" spacing="30px">
        <EmployeeList
          addEmployee={addEmployee}
          removeEmployee={removeEmployee}
          checkSelected={checkSelected} />
        <SelectedEmployeeList
          employees={selectedEmployees}
          removeEmployee={removeEmployee} />
      </Stack>
    </Stack>);
};
