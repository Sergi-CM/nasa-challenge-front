import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { routes } from "./router";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { Provider } from "react-redux";
import { store } from "../store";

describe("Given a router", () => {
  describe("When in the '/' root path", () => {
    test("Then it should display the text 'NASA Challenge' in the header", () => {
      const headingText = "NASA Challenge";

      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });

      render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </Provider>
      );
      const expectedHeading = screen.getByText(headingText);

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
