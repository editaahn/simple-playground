import { useState } from "react";
import { Employee } from "../types";

export function useEmployeeChoice() {
  const [employee, setEmployee] = useState<Partial<Employee>[]>([]);

  const addEmployee = (employee: Partial<Employee>) => {
    setEmployee(previous => [...previous, employee])
  };

  const removeEmployee = (id: number) => {
    setEmployee(previous => previous.filter(stored => id !== stored.id));
  };

  const checkSelected = (id: number) =>
    employee.some(employee => employee.id === id);

  return {
    selectedEmployee: employee,
    addEmployee,
    removeEmployee,
    checkSelected,
  };
}
