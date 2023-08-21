import { Accordion, AccordionDetails, AccordionSummary, Stack } from '@mui/material';
import { binder } from '@utils';
import { Employee, useEmployeeList } from './useEmployeeList';
import { EmployeeCell } from '../EmployeeCell';

export const EmployeeList = binder(useEmployeeList, ({
  employees,
  selectEmployee
}) => {
  const renderRecursiveAccordion = (employee: Employee) =>
    <Accordion disableGutters={true} key={employee.id}>
      <AccordionSummary>
        <EmployeeCell
          {...employee}
          select={checked => selectEmployee(checked, employee.id)}
          name={`${employee.first_name} ${employee.last_name}`}
        />
      </AccordionSummary>
      <AccordionDetails>
        <Stack direction="column">
          {employee.children.map((child) =>
            child.children ? renderRecursiveAccordion(child) :
              <EmployeeCell
                {...child}
                select={checked => selectEmployee(checked, child.id)}
                name={`${child.first_name} ${child.last_name}`}
                key={child.id}
              />
          )}
        </Stack>
      </AccordionDetails>
    </Accordion>;

  return (
    <Stack direction="column">
      {employees?.map(employee => renderRecursiveAccordion(employee))}
    </Stack>
  );
});
