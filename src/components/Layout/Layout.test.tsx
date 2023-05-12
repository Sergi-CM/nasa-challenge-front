import renderWithProviders from "../../testUtils";
import { screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'NASA Challenge' inside an h1 heading", () => {
      const expectedHeader = "NASA Challenge";

      renderWithProviders(<Layout />);
      const header = screen.getByRole("heading", { name: expectedHeader });

      expect(header).toBeInTheDocument();
    });
  });
});
