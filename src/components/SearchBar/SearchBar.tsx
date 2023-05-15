import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import {
  setInitialDateActionCreator,
  setToDateActionCreator,
} from "../../store/features/dates/datesSlice";
import SearchBarStyled from "./SearchBarStyled";
import useApi from "../../hooks/useApi";

const SearchBar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { getAsteroids } = useApi();

  const [initialDate, setInitialDate] = useState("");
  const [rangeOfDays, setRangeOfDays] = useState(1);

  const handleInitialDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInitialDate(event.target.value);
  };

  const handleRangeOfDaysChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRangeOfDays(+event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!initialDate) {
      return;
    }

    const fromDate = new Date(initialDate);

    const unformattedToDate = new Date();
    unformattedToDate.setDate(fromDate.getDate() + +rangeOfDays);
    const year = unformattedToDate.getFullYear();
    const month = String(unformattedToDate.getMonth() + 1).padStart(2, "0");
    const day = String(unformattedToDate.getDate()).padStart(2, "0");
    const formattedToDate = `${year}-${month}-${day}`;

    dispatch(setInitialDateActionCreator(initialDate));
    dispatch(setToDateActionCreator(formattedToDate));
    getAsteroids();
  };

  return (
    <SearchBarStyled className="searchbar" onSubmit={handleSubmit}>
      <label>
        Initial date:
        <input
          type="date"
          className="searchbar__initial-date"
          onChange={handleInitialDateChange}
        />
      </label>

      <label>
        Range of days:
        <select className="searchbar__range" onChange={handleRangeOfDaysChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
      </label>

      <button className="searchbar__submit-button" type="submit">
        SEARCH
      </button>
    </SearchBarStyled>
  );
};

export default SearchBar;
