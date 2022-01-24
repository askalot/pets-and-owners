import { configure, render, screen } from "@testing-library/react";
import Cat from "../pages/Cat";

describe("<Cat />", () => {
  beforeEach(() => {
    configure({
      // Suggest better queries to use for Testing Library
      throwSuggestions: true,
    });
  });

  // TODO - Research route params in testing
});
