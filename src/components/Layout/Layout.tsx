import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <SearchBar />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
