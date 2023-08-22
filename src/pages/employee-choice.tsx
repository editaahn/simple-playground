import { EmployeeChoiceSubmitButton, EmployeeList, SelectedEmployeeList, useEmployeeChoice } from "@libs";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useContext } from "react";
import { ApiErrorBoundary } from "@utils";
import { ToastContext } from "@contexts";

export const EmployeeChoicePage = () => {
  const { selectedEmployees, addEmployee, removeEmployee, checkSelected } = useEmployeeChoice();
  const { showToast } = useContext(ToastContext);

  return (
    <Stack direction="column">
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h1" fontSize={25}>Choose collegues</Typography>
        <ApiErrorBoundary onError={showToast}>
          <EmployeeChoiceSubmitButton choices={selectedEmployees.map(employee => employee.id) as number[]} />
        </ApiErrorBoundary>
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
