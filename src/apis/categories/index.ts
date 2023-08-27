type CategoryEntity = {
  entityId: string;
  name: string;
  description: string;
  isArchived: boolean;
};

const post = (uri: string, body: unknown) =>
  fetch(uri, {
    method: 'post',
    body: JSON.stringify(body)
  })
    .then(response => {
      if (!response.ok) {
        throw response;
      }
      return response;
    });

export const findCategories = () =>
  fetch('/categories')
    .then(response => response.json())
    .then(data => data);

export const createCategory = (body: Pick<CategoryEntity, 'name' | 'description'>) => post('/create-category', body);

export const editCategory = (body: Omit<CategoryEntity, 'isArchived'>) => post('/edit-category', body);

export const removeCategory = (body: CategoryEntity['entityId']) => post('/remove-category', body);
