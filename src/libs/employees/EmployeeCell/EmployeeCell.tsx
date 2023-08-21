import { Avatar, Checkbox, Typography } from '@mui/material';
import type { FC } from 'react';
import { Stack } from '@mui/system';
import { Employee } from '../types';

type EmployeeCellProps = {
  select: (checked: boolean) => void;
  name: string;
  checked: boolean;
} & Omit<Employee, 'first_name' | 'last_name' | 'id'>;

export const EmployeeCell: FC<EmployeeCellProps> = ({ select, name, avatar, checked }) =>
  <Stack direction="row" alignItems="center" gap="10px">
    <Avatar alt={name} src={avatar} />
    <Typography variant="body2" fontWeight="bold">
      {name}
    </Typography>
    <Checkbox
      checked={checked}
      onClick={event => event.stopPropagation()}
      onChange={event => select(event.target.checked)}
    />
  </Stack>;
