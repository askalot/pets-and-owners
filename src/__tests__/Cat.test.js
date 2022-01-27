import { configure, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Cat from "../pages/Cat";

// MemoryRouter wrapper that includes initialRoutes
const MemoryRouterWithInitialRoutes = ({ children, initialRoutes }) => {
  return <MemoryRouter initialEntries={initialRoutes}>{children}</MemoryRouter>;
};

// create a customRender that wraps the UI in a memory Router
// initialEntries array can be specified in options object
const customRender = (ui, options) => {
  const initialRoutes =
    options && options.initialRoutes ? options.initialRoutes : ["/"];

  return render(ui, {
    wrapper: (args) =>
      MemoryRouterWithInitialRoutes({
        ...args,
        initialRoutes,
      }),
    ...options,
  });
};

describe("<Cat />", () => {
  beforeEach(() => {
    configure({
      // Suggest better queries to use for Testing Library
      throwSuggestions: true,
    });
  });

  test("has back link", () => {
    customRender(<Cat />);

    const nameLabel = screen.getByRole("link", /Back/i);

    expect(nameLabel).toBeInTheDocument();
  });

  test("renders cat image", () => {
    customRender(<Cat />, { initialRoutes: ["/cats/Garfield-Jon"] });

    const image = screen.getByRole("img", { name: /posing/ });

    expect(image).toBeInTheDocument();
  });

  test("has section title", () => {
    customRender(<Cat />);

    const nameLabel = screen.getByRole("heading", { name: /Owner/i });

    expect(nameLabel).toBeInTheDocument();
  });
});
