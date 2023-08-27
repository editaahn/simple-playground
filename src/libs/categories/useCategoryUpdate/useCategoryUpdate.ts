import { createCategory, editCategory, findCategories, removeCategory } from "@apis";
import { useEffect, useState } from "react";
import { CategoryEntity } from "../types";

export function useCategoryUpdate() {
  const [categories, setCategories] = useState<CategoryEntity[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    setIsLoading(true);
    const fetchedCategories = await findCategories();
    setCategories(fetchedCategories);
    setIsLoading(false);
  };  

  const handleCreateItem = async (category: Pick<CategoryEntity, 'name' | 'description'>) => {
    await createCategory(category);
    fetchCategories();
  };

  const handleEditItem = async (category: Omit<CategoryEntity, 'isArchived'>) => {
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

  return {
    categories,
    isLoading,
    handleCreateItem,
    handleEditItem,
    handleRemoveItem,
  };
}
