export type CategoryEntity = {
  entityId: string;
  name: string;
  description: string;
  isArchived: boolean;
};

export type ValidCategory = Omit<CategoryEntity, 'isArchived'>;
