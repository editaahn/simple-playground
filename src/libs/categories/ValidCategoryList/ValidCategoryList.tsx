import { useState, type FC } from 'react';
import { CategoryEntity, ValidCategory } from '../types';
import { Category } from '../Category';

type ValidCategoryListProps = {
  categories: CategoryEntity[];
  handleSaveItem: (category: ValidCategory) => void;
  handleRemoveItem: (id: string) => void;
};

export const ValidCategoryList: FC<ValidCategoryListProps> = ({ categories, handleSaveItem, handleRemoveItem }) => {
  const [isCreating, setIsCreating] = useState(false);

  if (!categories.length) {
    return <p>Loading....</p>;
  }

  return (
    <>
      <ul>
        {categories.map((category) =>
          <Category
            {...category}
            key={category.entityId}
            edit={handleSaveItem}
            remove={handleRemoveItem}
          />
        )}
        {/* {isCreating ? <NewCategory /> : null} */}
      </ul>

      <button onClick={() => setIsCreating(true)}>
        Add Category
      </button>
    </>
  );
};