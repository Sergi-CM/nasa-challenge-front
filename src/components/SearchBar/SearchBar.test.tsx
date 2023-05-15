import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../testUtils";
import SearchBar from "./SearchBar";
import {
  setInitialDateActionCreator,
  setToDateActionCreator,
} from "../../store/features/dates/datesSlice";

const mockDispatcher = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockDispatcher,
}));

beforeEach(() => {
  jest.clearAllMocks(); // Reset mocks before each test
});

describe("Given a SearchBar component", () => {
  describe("When rendered", () => {
    test("Then it should show a date input with the label 'Initial date:'", () => {
      const labelText = "Initial date:";

      renderWithProviders(<SearchBar />);
      const dateInput = screen.getByLabelText(labelText);

      expect(dateInput).toBeInTheDocument();
    });

    test("Then it should show a select type input with the label 'Range of days:'", () => {
      const labelText = "Range of days:";

      renderWithProviders(<SearchBar />);
      const selectInput = screen.getByLabelText(labelText);

      expect(selectInput).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'SEARCH' inside", () => {
      const buttonText = "SEARCH";

      renderWithProviders(<SearchBar />);
      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user clicks the submit button", () => {
    test("Then it should dispatch the setInitialDateActionCreator and the setToDateActionCreator", async () => {
      const buttonText = "SEARCH";
      const initialDate = "2023-05-10";
      const toDate = "2023-05-14";
      const rangeOfDays = "4";

      renderWithProviders(<SearchBar />);
      const initialDateInput = screen.getByLabelText("Initial date:");
      const rangeDropdown = screen.getByLabelText("Range of days:");
      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.type(initialDateInput, initialDate);
      await userEvent.selectOptions(rangeDropdown, rangeOfDays);
      await userEvent.click(button);

      expect(mockDispatcher).toHaveBeenCalledWith(
        setInitialDateActionCreator(initialDate)
      );
      expect(mockDispatcher).toHaveBeenCalledWith(
        setToDateActionCreator(toDate)
      );
    });
  });

  describe("When the user clicks the submit button with the initial date input empty", () => {
    test("Then it should not dispatch any action", async () => {
      const buttonText = "SEARCH";

      renderWithProviders(<SearchBar />);
      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.click(button);

      expect(mockDispatcher).not.toHaveBeenCalled();
    });
  });
});
