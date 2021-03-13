import { rest } from "msw";
import { setupServer } from "msw/node";

import { users } from "./users";

const handlers = [
  rest.get(
    "https://jsonplaceholder.typicode.com/users",
    async (req, res, ctx) => {
      return res(ctx.json(users));
    }
  ),
];

const server = setupServer(...handlers);
export { server, rest };
