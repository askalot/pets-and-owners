import { configure, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import CatListItem from "../components/cats/CatListItem";

describe("<CatListItem />", () => {
  beforeEach(() => {
    configure({
      // Suggest better queries to use for Testing Library
      throwSuggestions: true,
    });
  });

  test("renders cat name", () => {
    render(<CatListItem catName="Garfield" ownerName="Jon" />, {
      // MemoryRouter wrapper is needed as the component uses React Router
      wrapper: MemoryRouter,
    });

    const catName = screen.getByText(/Garfield/);

    expect(catName).toBeInTheDocument();
  });

  test("renders owner name", () => {
    render(<CatListItem catName="Garfield" ownerName="Jon" />, {
      // MemoryRouter wrapper is needed as the component uses React Router
      wrapper: MemoryRouter,
    });

    const ownerName = screen.getByText(/Jon/);

    expect(ownerName).toBeInTheDocument();
  });

  test("renders navigation link", () => {
    render(<CatListItem catName="Garfield" ownerName="Jon" />, {
      // MemoryRouter wrapper is needed as the component uses React Router
      wrapper: MemoryRouter,
    });

    const link = screen.getByRole("link", { name: /Garfield/i });

    expect(link).toBeInTheDocument();
  });
});
