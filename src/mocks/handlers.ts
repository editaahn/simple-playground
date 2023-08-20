import { rest } from 'msw';
import employees from './employees/employees.json'

export const handlers = [
  rest.get('/employees', (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json(employees)
    )
  }),
]