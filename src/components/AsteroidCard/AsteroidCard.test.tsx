import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils";
import AsteroidCard from "./AsteroidCard";

describe("Given an AsteroidCard component", () => {
  describe("When rendered with an asteroid with name 'Sample Asteroid' and id '12345-abc'", () => {
    test("Then it should show the asteroid name and id", () => {
      const asteroidName = "Sample Asteroid";
      const asteroidId = "12345-abc";

      renderWithProviders(<AsteroidCard id={asteroidId} name={asteroidName} />);
      const cardName = screen.getByRole("heading", { name: asteroidName });
      const cardId = screen.getByText(asteroidId);

      expect(cardName).toBeInTheDocument();
      expect(cardId).toBeInTheDocument();
    });
  });
});
