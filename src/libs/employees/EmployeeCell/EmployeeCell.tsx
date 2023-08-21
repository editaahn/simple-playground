import { Avatar, Checkbox, TableCell, Typography } from '@mui/material';
import type { FC } from 'react';
import { Employee } from '../EmployeeList';
import { Stack } from '@mui/system';

type EmployeeCellProps = {
  select: (checked: boolean) => void;
  name: string;
} & Omit<Employee, 'first_name' | 'last_name' | 'id'>;

export const EmployeeCell: FC<EmployeeCellProps> = ({ select, name, avatar }) =>
  <TableCell>
    <Stack direction="row" alignItems="center" gap="10px">
      <Avatar alt={name} src={avatar} />
      <Typography variant="body2" fontWeight="bold">
        {name}
      </Typography>
      <Checkbox
        onClick={event => event.stopPropagation()}
        onChange={event => select(event.target.checked)} />
    </Stack>
  </TableCell>;
