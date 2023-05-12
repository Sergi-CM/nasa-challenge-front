import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/asteroids" />} />
        </Routes>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
