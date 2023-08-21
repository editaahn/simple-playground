import { useState } from "react";

export function useEmployeeChoice() {
  const [employeeIds, setEmployeeIds] = useState<number[]>([]);

  const addEmployeeId = (id: number) => {
    setEmployeeIds(previous => [...previous, id])
  };

  const removeEmployeeId = (id: number) => {
    setEmployeeIds(previous => previous.filter(storedId => id !== storedId));
  };

  return {
    selectedEmployeeIds: employeeIds,
    addEmployeeId,
    removeEmployeeId,
  };
}
