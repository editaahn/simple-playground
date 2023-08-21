import { Accordion, AccordionDetails, AccordionSummary, Stack } from '@mui/material';
import { binder } from '@utils';
import { useEmployeeList } from './useEmployeeList';
import { EmployeeCell } from '../EmployeeCell';
import { Employee } from '../types';

export const EmployeeList = binder(useEmployeeList, ({
  employeeTree,
  selectEmployee,
  checkSelected
}) => {
  const renderRecursiveAccordion = (employee: Employee) =>
    <Accordion disableGutters={true} key={employee.id}>
      <AccordionSummary>
        <EmployeeCell
          {...employee}
          select={checked => selectEmployee(checked, employee)}
          name={`${employee.first_name} ${employee.last_name}`}
          checked={checkSelected(employee.id)}
        />
      </AccordionSummary>
      <AccordionDetails>
        <Stack direction="column" spacing="16px">
          {employee.children.map((child) =>
            child.children ? renderRecursiveAccordion(child) :
              <EmployeeCell
                {...child}
                select={checked => selectEmployee(checked, child)}
                name={`${child.first_name} ${child.last_name}`}
                checked={checkSelected(child.id)}
                key={child.id}
              />
          )}
        </Stack>
      </AccordionDetails>
    </Accordion>;

  return (
    <Stack direction="column">
      {employeeTree ? renderRecursiveAccordion(employeeTree) : null}
    </Stack>
  );
}, {
  memoize: false,
  displayName: 'EmployeeList'
});
