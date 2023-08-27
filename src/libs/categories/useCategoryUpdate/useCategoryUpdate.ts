import { useEffect, useState } from "react";
import { CategoryEntity, ValidCategory } from "../types";
import { findCategories, editCategory, createCategory, removeCategory } from "@apis";

export function useCategoryUpdate() {
  const [categories, setCategories] = useState<CategoryEntity[]>([]);

  const fetchCategories = async () => {
    const fetchedCategories = await findCategories();
    setCategories(fetchedCategories);
  };

  const handleSaveItem = async (category: ValidCategory) => {
    if (category.entityId) {
      await editCategory(category);
    } else {
      await createCategory(category);
    }
    fetchCategories();
  };

  const handleRemoveItem = async (itemId: string) => {
    console.log(itemId)
    await removeCategory(itemId);
    fetchCategories();
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    handleSaveItem,
    handleRemoveItem,
  };
}
