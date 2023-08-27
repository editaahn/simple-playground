import { CategoryContext } from '@contexts';
import { memo, useContext, type FC } from 'react';

export const ArchivedCategoryList: FC = memo(() => {
  const { getCategoriesByIsArchived, isLoading } = useContext(CategoryContext);
  const categories = getCategoriesByIsArchived(true);

  if (isLoading && !categories.length) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {categories
        .map((category) => (
          <li key={category.entityId}>
            {category.name}
          </li>
        ))}
    </ul>
  );
});
