import { ArchivedCategoryList, ValidCategoryList, useCategoryUpdate } from '@libs';
import { FC } from 'react';

export const CategoryListPage: FC = () => {
  const { categories, handleCreateItem, handleEditItem, handleRemoveItem } = useCategoryUpdate();

  return (
    <div>
      <h1>Category List</h1>
      <ValidCategoryList
        categories={categories.filter((category) => !category.isArchived)}
        handleCreateItem={handleCreateItem}
        handleEditItem={handleEditItem}
        handleRemoveItem={handleRemoveItem}
      />

      <h2>Archive List</h2>
      <ArchivedCategoryList
        categories={categories.filter((category) => category.isArchived)}
      />
    </div >
  );
};
