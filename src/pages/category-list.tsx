import { ArchivedCategoryList, ValidCategoryList } from '@libs';
import { FC } from 'react';
import { CategoryProvider } from '@contexts';

export const CategoryListPage: FC = () => {
  return (
    <CategoryProvider>
      <main>
        <h1>Category List</h1>
        <ValidCategoryList />

        <h2>Archive List</h2>
        <ArchivedCategoryList />
      </main>
    </CategoryProvider>
  );
};
