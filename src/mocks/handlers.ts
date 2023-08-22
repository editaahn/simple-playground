import { rest } from 'msw';
import employees from './employees/employees.json';

export const handlers = [
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