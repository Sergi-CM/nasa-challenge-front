import { screen } from "@testing-library/react";
import AsteroidCardList from "./AsteroidCardList";
import renderWithProviders from "../../testUtils";

describe("Given an AsteroidCardList component", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'List of asteroids' inside an h2 heding", () => {
      const titleText = "List of asteroids";

      renderWithProviders(<AsteroidCardList />);
      const title = screen.getByRole("heading", { level: 2, name: titleText });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show a list of asteroids cards", () => {
      renderWithProviders(<AsteroidCardList />);
      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
    });
  });
});
