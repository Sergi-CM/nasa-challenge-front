import { DatesStructure } from "../../../types/datesTypes";
import {
  datesReducer,
  setInitialDateActionCreator,
  setToDateActionCreator,
} from "./datesSlice";

const datesInitialState: DatesStructure = {
  initialDate: "",
  toDate: "",
};

describe("Given a setInitialDate reducer", () => {
  describe("When it receives the date '2023-05-14'", () => {
    test("Then it should return the dates object with its 'initialDate' set on '2023-05-14'", () => {
      const receivedDate = "2023-05-14";
      const datesAfterUpdate = {
        initialDate: receivedDate,
        toDate: "",
      };

      const updateInitialDate = setInitialDateActionCreator(receivedDate);
      const newDates = datesReducer(datesInitialState, updateInitialDate);

      expect(newDates).toStrictEqual(datesAfterUpdate);
    });
  });
});

describe("Given a setToDate reducer", () => {
  describe("When it receives the date '2023-05-20'", () => {
    test("Then it should return the dates object with its 'toDate' set on '2023-05-20'", () => {
      const receivedDate = "2023-05-20";
      const datesAfterUpdate = {
        initialDate: "",
        toDate: receivedDate,
      };

      const updateToDate = setToDateActionCreator(receivedDate);
      const newDates = datesReducer(datesInitialState, updateToDate);

      expect(newDates).toStrictEqual(datesAfterUpdate);
    });
  });
});
