import { Chip, List, ListItem } from '@mui/material';
import { binder } from '@utils';
import { useAlbums } from './useAlbums';

export const Albums = binder(useAlbums, ({ albums }) =>
  <List>
    {albums?.map(({ title }) =>
      <ListItem>
        <Chip label={title} />
      </ListItem>
    )}
  </List>
);
