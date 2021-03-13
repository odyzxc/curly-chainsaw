import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "./app/store";
import App from "./App";
import { server, rest } from "./__mocks__/mockServer";

test("show error notification if request fails", async () => {
  server.use(
    rest.get(
      "https://jsonplaceholder.typicode.com/users",
      async (req, res, ctx) =>
        res(ctx.status(500), ctx.json({ message: "server error" }))
    )
  );
  await render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(await screen.findByRole("alert")).toHaveTextContent(
    "Failed to load users."
  );
});

test("render user list", async () => {
  await render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  await waitFor(() => screen.getByRole("list"));
  expect(await screen.findByText(/Leanne Graham/i)).toBeInTheDocument();
});
