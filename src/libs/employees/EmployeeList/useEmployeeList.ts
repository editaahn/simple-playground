import { useQuery } from "react-query";
import { findEmployees } from "@apis";

type UseEmployeeListProps = {
  addEmployee: (id: number) => void;
  removeEmployee: (id: number) => void;
};

export type Employee = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  children: Employee[];
};

export function useEmployeeList({ addEmployee, removeEmployee }: UseEmployeeListProps) {
  const { data: employees } = useQuery<Employee[]>('employees', findEmployees);
  const selectEmployee = (checked: boolean, id: number) => checked ? addEmployee(id) : removeEmployee(id);

  return {
    employees,
    selectEmployee
  };
}
