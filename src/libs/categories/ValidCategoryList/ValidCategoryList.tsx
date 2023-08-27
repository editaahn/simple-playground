import { useState, type FC } from 'react';
import { Category } from '../Category';
import { NewCategory } from '../NewCategory';
import { CategoryEntity, ValidCategory } from '../types';

type ValidCategoryListProps = {
  categories: CategoryEntity[];
  isLoading: boolean;
  handleCreateItem: (category: Pick<CategoryEntity, 'name' | 'description'>) => void;
  handleEditItem: (category: ValidCategory) => void;
  handleRemoveItem: (id: string) => void;
};

export const ValidCategoryList: FC<ValidCategoryListProps> = ({
  categories,
  isLoading,
  handleCreateItem,
  handleEditItem,
  handleRemoveItem
}) => {
  const [isCreating, setIsCreating] = useState(false);

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
            edit={handleEditItem}
            remove={handleRemoveItem}
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