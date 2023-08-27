import { memo, type FC } from 'react';
import { CategoryEntity } from '../types';

type ArchivedCategoryListProps = {
  categories: CategoryEntity[];
};

export const ArchivedCategoryList: FC<ArchivedCategoryListProps> = memo(({ categories }) => 
  <ul>
    {categories
      .map((archivedCategory) => (
        <li key={archivedCategory.entityId}>
          {archivedCategory.name}
        </li>
      ))}
  </ul>
);
