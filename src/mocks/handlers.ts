import { rest } from 'msw';
import categories from './json/categories.json';
import employees from './json/employees.json';

const employeeHandlers = [
  rest.get('/employees', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(employees)
    );
  }),
  rest.post('/submit-employees', async (req, res, ctx) => {
    const { ids } = await req.json().then(data => data);

    if (!ids.length) {
      return res(
        ctx.status(400),
        ctx.json({
          error: "Bad Request",
          message: "Submit at least one employee."
        }),
      );
    }
    
    return res(
      ctx.status(200),
    );
  })
];

const categoryHandlers = [
  rest.get('/categories', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(categories)
    );
  }),
  rest.post('/remove-category', async (req, res, ctx) => {
    const id = await req.json();
    const index = categories.findIndex(category => category.entityId === id);
    categories.splice(index, 1, { ...categories[index], isArchived: true });
    
    return res(
      ctx.status(200),
      ctx.json({ entityId: id })
    );
  }),
  rest.post('/edit-category', async (req, res, ctx) => {
    const editedCategory = await req.json();
    const index = categories.findIndex(category => category.entityId === editedCategory.entityId);
    categories.splice(index, 1, editedCategory);
    
    return res(
      ctx.status(200),
      ctx.json({ entityId: editedCategory.entityId })
    );
  }),
];

export const handlers = [...employeeHandlers, ...categoryHandlers]