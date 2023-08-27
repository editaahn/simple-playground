/* eslint-disable @typescript-eslint/no-unused-vars */
import { createCategory, editCategory, findCategories, removeCategory } from "@apis";
import { PropsWithChildren, createContext, useCallback, useEffect, useState } from "react";
import { CategoryEntity } from "../../libs/categories/types";

type CategoryContextValue = {
  isLoading: boolean,
  getCategoriesByIsArchived: (isArchived: boolean) => CategoryEntity[];
  handleCreateItem: (category: Pick<CategoryEntity, 'name' | 'description'>) => void,
  handleEditItem: (category: CategoryEntity) => void,
  handleRemoveItem: (itemId: string) => void,
};

export const CategoryContext = createContext<CategoryContextValue>({
  isLoading: false,
  getCategoriesByIsArchived: (_: boolean) => [],
  handleCreateItem: (_) => undefined,
  handleEditItem: (_) => undefined,
  handleRemoveItem: (_) => undefined,
});

export function CategoryProvider({ children }: PropsWithChildren) {
  const [categories, setCategories] = useState<CategoryEntity[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    setIsLoading(true);
    const fetchedCategories = await findCategories();
    setCategories(fetchedCategories);
    setIsLoading(false);
  };

  const getCategoriesByIsArchived = useCallback((isArchived: boolean) => 
    categories.filter(category => category.isArchived === isArchived)
  , [categories]);

  const handleCreateItem = async (category: Pick<CategoryEntity, 'name' | 'description'>) => {
    await createCategory(category);
    await fetchCategories();
  };

  const handleEditItem = async (category: CategoryEntity) => {
    await editCategory(category);
    fetchCategories();
  };

  const handleRemoveItem = async (itemId: string) => {
    await removeCategory(itemId);
    fetchCategories();
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{
      isLoading,
      getCategoriesByIsArchived,
      handleCreateItem,
      handleEditItem,
      handleRemoveItem,
    }}>
      {children}
    </CategoryContext.Provider>);
}
