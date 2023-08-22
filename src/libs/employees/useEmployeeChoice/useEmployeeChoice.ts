import { useState } from "react";
import { Employee } from "../types";

export function useEmployeeChoice() {
  const [employees, setEmployees] = useState<Partial<Employee>[]>([]);

  const addEmployee = (employee: Partial<Employee>) => {
    setEmployees(previous => [...previous, employee])
  };

  const removeEmployee = (id: number) => {
    setEmployees(previous => previous.filter(stored => id !== stored.id));
  };

  const checkSelected = (id: number) =>
    employees.some(employee => employee.id === id);

  return {
    selectedEmployees: employees,
    addEmployee,
    removeEmployee,
    checkSelected,
  };
}
