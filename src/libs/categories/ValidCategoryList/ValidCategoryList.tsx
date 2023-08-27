import { CategoryContext } from '@contexts';
import { useContext, useState, type FC } from 'react';
import { Category } from '../Category';
import { NewCategory } from '../NewCategory';

export const ValidCategoryList: FC = () => {
  const { getCategoriesByIsArchived, isLoading } = useContext(CategoryContext);
  const [isCreating, setIsCreating] = useState(false);

  const categories = getCategoriesByIsArchived(false);

  if (!categories.length && isLoading) {
    return <p>Loading....</p>;
  }
  
  return (
    <>
      <ul>
        {categories.map((category) =>
          <Category
            {...category}
            key={category.entityId}
          />
        )}
        {isCreating ?
          <NewCategory
            cancel={() => setIsCreating(false)}
          /> : null}
      </ul>

      <button onClick={() => setIsCreating(true)}>
        Add Category
      </button>
    </>
  );
};