import { Button, List, ListItem } from '@mui/material';
import type { FC } from 'react';
import { Employee } from '../types';

type SelectedEmployeeListProps = {
  employees: Partial<Employee>[];
  removeEmployee: (id: number) => void;
};

export const SelectedEmployeeList: FC<SelectedEmployeeListProps> = ({ employees, removeEmployee }) =>
  <List dense sx={{ width: '100%', maxWidth: 300 }}>
    {employees?.map(({ first_name, last_name, id }) =>
      <ListItem
        alignItems="center"
        sx={{ gap: '10px', justifyContent: "space-between" }}
        key={id}
      >
        {`${first_name} ${last_name}`}
        <Button color="secondary" variant="outlined" onClick={() => id && removeEmployee(id)}>remove</Button>
      </ListItem>
    ) ?? []}
  </List>;