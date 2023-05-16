import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import AsteroidCardList from "../AsteroidCardList/AsteroidCardList";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <SearchBar />
        <Outlet />
        <AsteroidCardList />
      </main>
    </>
  );
};

export default Layout;
