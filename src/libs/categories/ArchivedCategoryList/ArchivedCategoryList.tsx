import { memo, type FC } from 'react';
import { CategoryEntity } from '../types';

type ArchivedCategoryListProps = {
  categories: CategoryEntity[];
  isLoading: boolean;
};

export const ArchivedCategoryList: FC<ArchivedCategoryListProps> = memo(({ categories, isLoading }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {categories
        .map((archivedCategory) => (
          <li key={archivedCategory.entityId}>
            {archivedCategory.name}
          </li>
        ))}
    </ul>
  );
});
