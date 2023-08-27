import { CategoryContext } from '@contexts';
import { useContext, useState, type FC } from 'react';
import { Category } from '../Category';
import { NewCategory } from '../NewCategory';
import { CategoryEntity } from '../types';

export const ValidCategoryList: FC = () => {
  const { getCategoriesByIsArchived, isLoading, handleCreateItem } = useContext(CategoryContext);
  const [isCreating, setIsCreating] = useState(false);

  const categories = getCategoriesByIsArchived(false);

  if (!categories.length && isLoading) {
    return <p>Loading....</p>;
  }

  const save = (category: Pick<CategoryEntity, 'name' | 'description'>) => {
    setIsCreating(false);
    handleCreateItem(category);
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
            save={save}
            cancel={() => setIsCreating(false)}
          /> : null}
      </ul>

      <button onClick={() => setIsCreating(true)}>
        Add Category
      </button>
    </>
  );
};