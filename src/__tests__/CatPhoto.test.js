import { configure, render, screen } from "@testing-library/react";

import CatPhoto from "../components/cats/CatPhoto";

describe("<CatPhoto />", () => {
  beforeEach(() => {
    configure({
      // Suggest better queries to use for Testing Library
      throwSuggestions: true,
    });
  });

  test("uses correct src and alt attributes", () => {
    const url = "https://source.unsplash.com/random/?cat,Garfield";

    render(<CatPhoto url={url} catName="Garfield" />);

    const image = screen.getByRole("img", { name: /Garfield posing/ });

    expect(image).toHaveAttribute("src", url);
  });
});
