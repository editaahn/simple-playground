import { useQuery } from "react-query";
import { findEmployees } from "@apis";
import { Employee } from "../types";

type UseEmployeeListProps = {
  addEmployee: (id: number) => void;
  removeEmployee: (id: number) => void;
};

export function useEmployeeList({ addEmployee, removeEmployee }: UseEmployeeListProps) {
  const { data: employees } = useQuery<Employee[]>('employees', findEmployees);
  const selectEmployee = (checked: boolean, id: number) => checked ? addEmployee(id) : removeEmployee(id);

  return {
    employees,
    selectEmployee
  };
}
