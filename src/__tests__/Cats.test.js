import { configure, render, screen } from "@testing-library/react";
import Cats from "../pages/Cats";

describe("<Cats />", () => {
  beforeEach(() => {
    configure({
      // Suggest better queries to use for Testing Library
      throwSuggestions: true,
    });
  });

  test("renders page title", () => {
    render(<Cats />);
    const pageTitle = screen.getByRole("heading", {
      name: /^Cats/i,
    });
    expect(pageTitle).toBeInTheDocument();
  });

  test("renders female section title", () => {
    render(<Cats />);
    const sectionTitle = screen.getByRole("heading", {
      name: /^Female owned/i,
    });
    expect(sectionTitle).toBeInTheDocument();
  });

  test("renders male section title", () => {
    render(<Cats />);
    const sectionTitle = screen.getByRole("heading", {
      name: /^Male owned/i,
    });
    expect(sectionTitle).toBeInTheDocument();
  });
});
