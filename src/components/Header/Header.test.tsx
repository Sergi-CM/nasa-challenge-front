import renderWithProviders from "../../testUtils";
import { screen } from "@testing-library/react";

import Header from "./Header";

describe("Given a Header component", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'NASA Challenge' inside an h1 heading", () => {
      const headingText = "NASA Challenge";

      renderWithProviders(<Header />);
      const mainHeading = screen.getByRole("heading", {
        name: headingText,
        level: 1,
      });

      expect(mainHeading).toBeInTheDocument();
    });
  });
});
