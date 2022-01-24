import { configure, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import NotFound from "../pages/NotFound";

describe("<NotFound />", () => {
  beforeEach(() => {
    configure({
      // Suggest better queries to use for Testing Library
      throwSuggestions: true,
    });
  });

  test("renders page title", () => {
    render(<NotFound />, {
      // MemoryRouter wrapper is needed as the component uses React Router
      wrapper: MemoryRouter,
    });

    const pageTitle = screen.getByRole("heading", {
      name: /^Not found/i,
    });

    expect(pageTitle).toBeInTheDocument();
  });

  test("renders default warning message", () => {
    render(<NotFound />, {
      // MemoryRouter wrapper is needed as the component uses React Router
      wrapper: MemoryRouter,
    });

    const pageContent = screen.getByText(
      /That page doesn't exist on this site, please go back/
    );

    expect(pageContent).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(<NotFound />, {
      // MemoryRouter wrapper is needed as the component uses React Router
      wrapper: MemoryRouter,
    });

    const backLink = screen.getByRole("link", { name: /All cats/ });
    const homeLink = screen.getByRole("link", { name: /home/i });

    expect(backLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
  });
});
