import { Link, List, ListItem, Stack } from '@mui/material';
import type { FC } from 'react';

export const MainPage: FC = () =>
  <Stack>
    <List>
      <ListItem>
        <Link href="/piano" variant="body2" fontWeight="bold">
          Piano
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/worker-choice" variant="body2" fontWeight="bold">
          Hierarchy Accordion
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/category-list" variant="body2" fontWeight="bold">
          List
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/scroll-image-animation" variant="body2" fontWeight="bold">
          Scroll Image Animation
        </Link>
      </ListItem>
    </List>
  </Stack>;