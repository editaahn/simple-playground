import { useQuery } from "react-query";
import { findEmployees } from "@apis";
import { Employee } from "../types";

type UseEmployeeListProps = {
  addEmployee: (employee: Partial<Employee>) => void;
  removeEmployee: (id: number) => void;
  checkSelected: (id: number) => boolean;
};

export function useEmployeeList({ addEmployee, removeEmployee, checkSelected }: UseEmployeeListProps) {
  const { data: employeeTree } = useQuery<Employee>('employeeTree', findEmployees);
  const selectEmployee = (checked: boolean, employee: Employee) => checked ? addEmployee(employee) : removeEmployee(employee.id);

  return {
    employeeTree,
    selectEmployee,
    checkSelected,
  };
}
